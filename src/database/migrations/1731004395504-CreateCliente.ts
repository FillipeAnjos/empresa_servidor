import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCliente1731004395504 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cliente",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        generationStrategy: "increment",
                        isGenerated: true
                    },
                    {
                        name: "seu_nome",
                        type: "varchar",
                        length: '60',
                        isNullable: false
                    },
                    {
                        name: "seu_email",
                        type: "varchar",
                        isUnique: true,
                        length: '70',
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cliente");
    }

}
