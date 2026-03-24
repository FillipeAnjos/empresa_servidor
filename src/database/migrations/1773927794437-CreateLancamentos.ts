import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLancamentos1773927794437 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "lancamentos",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        generationStrategy: "increment",
                        isGenerated: true
                    },
                    {
                        name: "tipo",
                        type: "varchar",
                        length: '60',
                        isNullable: false
                    },
                    {
                        name: "data_hora",
                        type: "timestamp",
                    },
                    {
                        name: "descricao",
                        type: "varchar"
                    },
                    {
                        name: "sincronizado",
                        type: "boolean"
                    },
                    {
                        name: "firma_id",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "usuario_id",
                        type: "int",
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
                foreignKeys: [
                    {
                        name: "FKFirma",
                        referencedTableName: "firma",
                        referencedColumnNames: ["id"],
                        columnNames: ["firma_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUsuario",
                        referencedTableName: "usuario",
                        referencedColumnNames: ["id"],
                        columnNames: ["usuario_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("lancamentos");
    }

}
