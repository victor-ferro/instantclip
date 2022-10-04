import { MigrationInterface, QueryRunner } from "typeorm"

export class firstmigration1664883172801 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "template" RENAME COLUMN "music" TO "musicname"`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "template" RENAME COLUMN "musicname" TO "music"`,
        )
    }

}
