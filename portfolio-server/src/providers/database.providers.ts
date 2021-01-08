import { createConnection } from 'typeorm'

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'portfolio',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, // 本番NGの設定
      }),
  },
]
