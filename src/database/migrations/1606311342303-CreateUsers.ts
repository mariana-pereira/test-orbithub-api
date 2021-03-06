import { MigrationInterface, QueryRunner, Table, Index } from "typeorm";

export class CreateUsers1606311342303 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                  {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                  },
                  {
                    name: 'username',
                    type: 'varchar',
                    isUnique: true,
                  },
                  {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                  },
                  {
                    name: 'password_hash',
                    type: 'varchar',
                  },
                  {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                  },
                  {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                  }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
      }

}
