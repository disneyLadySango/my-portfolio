import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm'
import { ArticleLists } from './articleLists'
import { Category } from './category'

@Entity()
export class Articles {

  /** ID */
  @PrimaryGeneratedColumn()
  readonly id: number

  /** UID */
  @PrimaryGeneratedColumn('uuid')
  readonly uid: string

  /** 記事タイトル */
  @Column({ length: 256 })
  title: string

  /** 記事概要 */
  @Column({ length: 2000 })
  description: string

  /** 画像 */
  @Column()
  image: string
  
  /** カテゴリ */
  @Column()
  categoryId: string
  
  /** 作成日時 */
  @CreateDateColumn()
  readonly createdAt: Date

  /** 更新日時 */
  @UpdateDateColumn()
  readonly updatedAt: Date

  /** 子テーブル */
  @OneToMany(type => ArticleLists, articleList => articleList.articleId)
  articleLists: ArticleLists[]

  /** カテゴリ */
  @OneToOne(type => Category, category => category.id)
  @JoinColumn({ name: 'categoryId' })
  category: Category

  constructor(
    title: string,
    categoryId: string,
    description?: string,
  ) {
    this.title = title
    this.categoryId = categoryId
    if (description) this.description = description
  }
}
