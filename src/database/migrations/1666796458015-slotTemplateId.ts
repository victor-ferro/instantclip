import { MigrationInterface, QueryRunner } from "typeorm";

export class slotTemplateId1666796458015 implements MigrationInterface {
    name = 'slotTemplateId1666796458015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`slot\` DROP FOREIGN KEY \`FK_502a84dec84011b1b3e880cd609\``);
        await queryRunner.query(`ALTER TABLE \`slot\` CHANGE \`idId\` \`templateId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`slot\` ADD CONSTRAINT \`FK_233e9d478bfd1db8bf437da026c\` FOREIGN KEY (\`templateId\`) REFERENCES \`templates\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`slot\` DROP FOREIGN KEY \`FK_233e9d478bfd1db8bf437da026c\``);
        await queryRunner.query(`ALTER TABLE \`slot\` CHANGE \`templateId\` \`idId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`slot\` ADD CONSTRAINT \`FK_502a84dec84011b1b3e880cd609\` FOREIGN KEY (\`idId\`) REFERENCES \`templates\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
