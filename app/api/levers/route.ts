import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const levers = await prisma.lever.findMany()
    // Transform fields to match the Lever interface in app/page.tsx
    const transformedLevers = levers.map(lever => ({
      id: lever.id,
      Nature: lever.nature,
      Workstream: lever.workstream,
      Substream: lever.substream,
      Titre: lever.titre,
      Description: lever.description,
      "FTE Impact": lever.fteImpact,
      Owner: lever.owner,
      Complexity: lever.complexity,
      "Impacted BU": lever.impactedBU,
      "Savings (Low, m€)": lever.savingsLowMEUR,
      "Savings (High, m€)": lever.savingsHighMEUR,
      "FTE Impact (Low, #)": lever.fteCountLow,
      "FTE Impact (High, #)": lever.fteCountHigh,
    }))
    return NextResponse.json(transformedLevers)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch levers' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      nature,
      workstream,
      substream,
      titre,
      description,
      fteImpact,
      owner,
      complexity,
      impactedBU,
      savingsLow,       // non-FTE savings low
      savingsHigh,      // non-FTE savings high
      fteSavingsLow,    // FTE savings low (monetary) - only if fteImpact is true
      fteSavingsHigh,   // FTE savings high (monetary) - only if fteImpact is true
      fteCountLow,      // FTE count low - only if fteImpact is true
      fteCountHigh,     // FTE count high - only if fteImpact is true
    } = body;

    if (fteImpact) {
      // Create two rows: one for non-FTE and one for FTE
      const nonFTERow = await prisma.lever.create({
        data: {
          nature,
          workstream,
          substream,
          titre,
          description,
          fteImpact: false,
          owner,
          complexity,
          impactedBU,
          savingsLowMEUR: savingsLow,
          savingsHighMEUR: savingsHigh,
          fteCountLow: 0,
          fteCountHigh: 0,
        },
      });

      const fteRow = await prisma.lever.create({
        data: {
          nature,
          workstream,
          substream,
          titre,
          description,
          fteImpact: true,
          owner,
          complexity,
          impactedBU,
          savingsLowMEUR: fteSavingsLow,
          savingsHighMEUR: fteSavingsHigh,
          fteCountLow: fteCountLow,
          fteCountHigh: fteCountHigh,
        },
      });

      return NextResponse.json({ nonFTERow, fteRow }, { status: 201 });
    } else {
      // Create one row for non-FTE only
      const lever = await prisma.lever.create({
        data: {
          nature,
          workstream,
          substream,
          titre,
          description,
          fteImpact: false,
          owner,
          complexity,
          impactedBU,
          savingsLowMEUR: savingsLow,
          savingsHighMEUR: savingsHigh,
          fteCountLow: 0,
          fteCountHigh: 0,
        },
      });

      return NextResponse.json(lever, { status: 201 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create lever' }, { status: 500 });
  }
}
