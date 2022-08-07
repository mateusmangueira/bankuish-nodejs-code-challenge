-- CreateTable
CREATE TABLE "users" (
    "userId" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "courses" (
    "courseId" TEXT NOT NULL,
    "userId" TEXT,
    "desiredCourse" TEXT NOT NULL,
    "requiredCourse" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("courseId")
);

-- CreateIndex
CREATE UNIQUE INDEX "courses_desiredCourse_key" ON "courses"("desiredCourse");

-- CreateIndex
CREATE UNIQUE INDEX "courses_requiredCourse_key" ON "courses"("requiredCourse");

-- CreateIndex
CREATE UNIQUE INDEX "courses_order_key" ON "courses"("order");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
