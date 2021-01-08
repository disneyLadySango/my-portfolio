import { Controller, Get, Post, Query } from '@nestjs/common';

@Controller('hoge')
export class ArticleController {
  // constructor(private readonly service: MemoService) { }

  @Get()
  findAll(@Query() query: { page: number }): any {
    return 'This action returns all cats' + query.page;
  }
}
