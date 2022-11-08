import { MigrationInterface, QueryRunner } from "typeorm";

export class tagsToArray1665402011593 implements MigrationInterface {
    name = 'tagsToArray1665402011593'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`template\` DROP COLUMN \`tags\``);
        await queryRunner.query(`ALTER TABLE \`template\` ADD \`tags\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`template\` DROP COLUMN \`tags\``);
        await queryRunner.query(`ALTER TABLE \`template\` ADD \`tags\` varchar(255) NOT NULL`);
    }

}
