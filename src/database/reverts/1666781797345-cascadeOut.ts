import { MigrationInterface, QueryRunner } from "typeorm";

export class cascadeOut1666781797345 implements MigrationInterface {
    name = 'cascadeOut1666781797345'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`template\` DROP FOREIGN KEY \`FK_a3c5919508f7af065311191a04d\``);
        await queryRunner.query(`ALTER TABLE \`template\` ADD CONSTRAINT \`FK_a3c5919508f7af065311191a04d\` FOREIGN KEY (\`templateId\`) REFERENCES \`templates\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`template\` DROP FOREIGN KEY \`FK_a3c5919508f7af065311191a04d\``);
        await queryRunner.query(`ALTER TABLE \`template\` ADD CONSTRAINT \`FK_a3c5919508f7af065311191a04d\` FOREIGN KEY (\`templateId\`) REFERENCES \`templates\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
