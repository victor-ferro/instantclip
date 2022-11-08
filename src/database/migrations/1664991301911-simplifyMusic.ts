import { MigrationInterface, QueryRunner } from "typeorm";

export class simplifyMusic1664991301911 implements MigrationInterface {
    name = 'simplifyMusic1664991301911'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`template\` DROP FOREIGN KEY \`FK_eec5ae39f87c25dffe678a39fdb\``);
        await queryRunner.query(`ALTER TABLE \`template\` CHANGE \`musicId\` \`music\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`music\` CHANGE \`nombre\` \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`template\` DROP COLUMN \`music\``);
        await queryRunner.query(`ALTER TABLE \`template\` ADD \`music\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`music\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`music\` ADD \`name\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`music\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`music\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`template\` DROP COLUMN \`music\``);
        await queryRunner.query(`ALTER TABLE \`template\` ADD \`music\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`music\` CHANGE \`name\` \`nombre\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`template\` CHANGE \`music\` \`musicId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`template\` ADD CONSTRAINT \`FK_eec5ae39f87c25dffe678a39fdb\` FOREIGN KEY (\`musicId\`) REFERENCES \`music\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
