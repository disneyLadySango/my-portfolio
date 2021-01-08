import { Module } from '@nestjs/common'
import * as Providers from 'src/providers/database.providers'

@Module({
  providers: [...Providers.databaseProviders],
  exports: [...Providers.databaseProviders],
})
export class DatabaseModule {}
