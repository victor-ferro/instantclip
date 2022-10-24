import { MigrationInterface, QueryRunner } from "typeorm";

export class addUserEntity1664991489415 implements MigrationInterface {
    name = 'addUserEntity1664991489415'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`template\` ADD \`creatorUserId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`template\` ADD CONSTRAINT \`FK_16f0c8e3029376580edf2ff87de\` FOREIGN KEY (\`creatorUserId\`) REFERENCES \`user\`(\`userId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`template\` DROP FOREIGN KEY \`FK_16f0c8e3029376580edf2ff87de\``);
        await queryRunner.query(`ALTER TABLE \`template\` DROP COLUMN \`creatorUserId\``);
    }

}
