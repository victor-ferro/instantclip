import { MigrationInterface, QueryRunner } from "typeorm";

export class pruebaMigrationGenerate1664990692310 implements MigrationInterface {
    name = 'pruebaMigrationGenerate1664990692310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`template\` DROP FOREIGN KEY \`FK_16f0c8e3029376580edf2ff87de\``);
        await queryRunner.query(`ALTER TABLE \`music\` CHANGE \`name\` \`nombre\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`template\` DROP COLUMN \`creatorUserId\``);
        await queryRunner.query(`ALTER TABLE \`music\` DROP COLUMN \`nombre\``);
        await queryRunner.query(`ALTER TABLE \`music\` ADD \`nombre\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`music\` DROP COLUMN \`nombre\``);
        await queryRunner.query(`ALTER TABLE \`music\` ADD \`nombre\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`template\` ADD \`creatorUserId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`music\` CHANGE \`nombre\` \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`template\` ADD CONSTRAINT \`FK_16f0c8e3029376580edf2ff87de\` FOREIGN KEY (\`creatorUserId\`) REFERENCES \`user\`(\`userId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
