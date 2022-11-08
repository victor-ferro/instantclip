import { MigrationInterface, QueryRunner } from "typeorm";

export class slotsToArray1665403454298 implements MigrationInterface {
    name = 'slotsToArray1665403454298'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`templates\` ADD \`slots\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`templates\` DROP COLUMN \`slots\``);
    }

}
