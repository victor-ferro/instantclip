import { MigrationInterface, QueryRunner } from "typeorm";

export class tstReverts1664994947727 implements MigrationInterface {
    name = 'tstReverts1664994947727'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`names\` \`cacahuetes\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`cacahuetes\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`cacahuetes\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`cacahuetes\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`cacahuetes\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`cacahuetes\` \`names\` varchar(255) NOT NULL`);
    }

}