import { MigrationInterface, QueryRunner } from "typeorm";

export class test11664994049905 implements MigrationInterface {
    name = 'test11664994049905'

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
