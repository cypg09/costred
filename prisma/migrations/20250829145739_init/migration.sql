-- CreateTable
CREATE TABLE "levers" (
    "id" TEXT NOT NULL,
    "Nature" TEXT NOT NULL,
    "Workstream" TEXT NOT NULL,
    "Substream" TEXT NOT NULL,
    "Titre" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "FTE impact" BOOLEAN NOT NULL,
    "Owner" TEXT NOT NULL,
    "Complexity" TEXT NOT NULL,
    "Impacted BU" TEXT NOT NULL,
    "Savings (Low, m€)" DOUBLE PRECISION NOT NULL,
    "Savings (High, m€)" DOUBLE PRECISION NOT NULL,
    "FTE impact (Low, m€)" DOUBLE PRECISION NOT NULL,
    "FTE impact (High, m€)" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "levers_pkey" PRIMARY KEY ("id")
);
