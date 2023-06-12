-- CreateTable
CREATE TABLE "JUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,

    CONSTRAINT "JUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "productName" TEXT NOT NULL,
    "productQuantity" INTEGER NOT NULL,
    "productPrice" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JUser_username_key" ON "JUser"("username");
