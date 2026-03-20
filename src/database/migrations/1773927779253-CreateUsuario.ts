import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsuario1773927779253 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuario",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        generationStrategy: "increment",
                        isGenerated: true
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        length: '60',
                        isNullable: false
                    },
                    {
                        name: "login",
                        type: "varchar",
                        isUnique: true,
                        length: '70',
                        isNullable: false
                    },
                    {
                        name: "senha",
                        type: "varchar"
                    },
                    {
                        name: "firma_id",
                        type: "int",
                        isNullable: true
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
                foreignKeys: [
                    {
                        name: "FKFirma",
                        referencedTableName: "firma",
                        referencedColumnNames: ["id"],
                        columnNames: ["firma_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuario");
    }

}
