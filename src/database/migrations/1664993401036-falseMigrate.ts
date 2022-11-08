import { MigrationInterface, QueryRunner } from "typeorm";

export class falseMigrate1664993401036 implements MigrationInterface {
    name = 'falseMigrate1664993401036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`name\` \`names\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`names\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`names\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`names\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`names\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`names\` \`name\` varchar(255) NOT NULL`);
    }

}
