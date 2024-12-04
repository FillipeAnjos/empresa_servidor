import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAssinaturaepagamento1731068234093 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "assinaturaepagamento",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        generationStrategy: "increment",
                        isGenerated: true
                    },
                    {
                        name: "id_cliente",
                        type: "int"
                    },
                    {
                        name: "tipo",
                        type: "varchar",
                        length: '20'
                    },
                    {
                        name: "aquisicao",
                        type: "varchar",
                        length: '10'
                    },
                    {
                        name: "nome_casal",
                        type: "varchar",
                        length: '40'
                    },
                    {
                        name: "data_relacionamento",
                        type: "varchar",
                        length: '10'
                    },
                    {
                        name: "hora_relacionamento",
                        type: "varchar",
                        length: '5'
                    },
                    {
                        name: "msg",
                        type: "varchar",
                        length: '500'
                    },
                    {
                        name: "img1",
                        type: 'varchar',
                        length: '500',
                        isNullable: false
                    },
                    {
                        name: "img2",
                        type: 'varchar',
                        length: '500',
                        isNullable: true
                    },
                    {
                        name: "img3",
                        type: 'varchar',
                        length: '500',
                        isNullable: true
                    },
                    {
                        name: "url_casal",
                        type: "varchar",
                        length: '50'
                    },
                    {
                        name: "status",
                        type: "varchar",
                        length: '30'
                    },
                    {
                        name: "ativo",
                        type: "boolean"
                    },
                    {
                        name: "moeda",
                        type: "varchar",
                        length: '5'
                    },
                    {
                        name: "pais",
                        type: "varchar",
                        length: '10'
                    },
                    {
                        name: "img_qrcode",
                        type: "text"
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
                        name: "FKAssinaturaepagamento",
                        referencedTableName: "cliente",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_cliente"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("assinaturaepagamento");
    }

}
