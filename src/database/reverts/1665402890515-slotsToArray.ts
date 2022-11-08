import { MigrationInterface, QueryRunner } from "typeorm";

export class slotsToArray1665402890515 implements MigrationInterface {
    name = 'slotsToArray1665402890515'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`templates\` ADD \`slots\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`templates\` DROP COLUMN \`slots\``);
    }

}
