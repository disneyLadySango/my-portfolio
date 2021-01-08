import { Module } from '@nestjs/common';
import { ArticleController } from 'src/controllers/article.controller'

@Module({
  imports: [],
  controllers: [ArticleController],
  // providers: [AppService],
})
export class ArticleModule {}
