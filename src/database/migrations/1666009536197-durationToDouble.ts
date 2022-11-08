import { MigrationInterface, QueryRunner } from "typeorm";

export class durationToDouble1666009536197 implements MigrationInterface {
    name = 'durationToDouble1666009536197'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`templates\` DROP COLUMN \`duration\``);
        await queryRunner.query(`ALTER TABLE \`templates\` ADD \`duration\` decimal(5,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`templates\` DROP COLUMN \`duration\``);
        await queryRunner.query(`ALTER TABLE \`templates\` ADD \`duration\` int NOT NULL`);
    }

}
