/*
  Warnings:

  - You are about to drop the column `descricao` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `foto` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `valor` on the `Produto` table. All the data in the column will be lost.
  - Added the required column `description` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "descricao",
DROP COLUMN "foto",
DROP COLUMN "nome",
DROP COLUMN "valor",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "photo" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;
