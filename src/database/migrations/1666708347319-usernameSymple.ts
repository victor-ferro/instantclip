import { MigrationInterface, QueryRunner } from "typeorm";

export class usernameSymple1666708347319 implements MigrationInterface {
    name = 'usernameSymple1666708347319'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`template\` DROP FOREIGN KEY \`FK_4ac98d8b61324ad781fc189031f\``);
        await queryRunner.query(`ALTER TABLE \`template\` DROP COLUMN \`creatorUsername\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`userId\` \`userId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD PRIMARY KEY (\`userId\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`userId\` \`userId\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`template\` ADD CONSTRAINT \`FK_16f0c8e3029376580edf2ff87de\` FOREIGN KEY (\`creatorUserId\`) REFERENCES \`user\`(\`userId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`template\` DROP FOREIGN KEY \`FK_16f0c8e3029376580edf2ff87de\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`userId\` \`userId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD PRIMARY KEY (\`username\`, \`userId\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`userId\` \`userId\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`template\` ADD \`creatorUsername\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`template\` ADD CONSTRAINT \`FK_4ac98d8b61324ad781fc189031f\` FOREIGN KEY (\`creatorUserId\`, \`creatorUsername\`) REFERENCES \`user\`(\`userId\`,\`username\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
