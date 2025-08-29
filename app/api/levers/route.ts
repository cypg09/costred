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
      "FTE impact": lever.fteImpact,
      Owner: lever.owner,
      Complexity: lever.complexity,
      "Impacted BU": lever.impactedBU,
      "Savings (Low, m€)": lever.savingsLowMEUR,
      "Savings (High, m€)": lever.savingsHighMEUR,
      "FTE impact (Low, m€)": lever.fteImpactLowMEUR,
      "FTE impact (High, m€)": lever.fteImpactHighMEUR,
    }))
    return NextResponse.json(transformedLevers)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch levers' }, { status: 500 })
  }
}
