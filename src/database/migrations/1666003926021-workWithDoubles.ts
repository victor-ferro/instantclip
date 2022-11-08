import { MigrationInterface, QueryRunner } from "typeorm";

export class workWithDoubles1666003926021 implements MigrationInterface {
    name = 'workWithDoubles1666003926021'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`slot\` DROP COLUMN \`time\``);
        await queryRunner.query(`ALTER TABLE \`slot\` ADD \`time\` decimal(5,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`slot\` DROP COLUMN \`time\``);
        await queryRunner.query(`ALTER TABLE \`slot\` ADD \`time\` int NOT NULL`);
    }

}
