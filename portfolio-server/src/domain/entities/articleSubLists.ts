import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { ArticleLists } from './articleLists'

@Entity()
export class ArticleSubLists {
  /** ID */
  @PrimaryGeneratedColumn()
  readonly id: number

  /** 親ID */
  @Column()
  readonly articleListId: number

  /** タイトル */
  @Column({ length: 100 })
  title: string

  /** 説明文 */
  @Column({ length: 500 })
  description: string

  /** 画像1 */
  @Column()
  image1: string

  /** 画像2 */
  @Column()
  image2: string

  /** 画像3 */
  @Column()
  image3: string

  /** レビュー数 */
  @Column()
  reviewCount: number

  /** 下限価格 */
  @Column()
  minPrice: number

  /** 上限価格 */
  @Column()
  maxPrice: number

  @CreateDateColumn()
  readonly createdAt: Date

  @UpdateDateColumn()
  readonly updatedAt: Date

  @ManyToOne(type => ArticleLists, articleList => articleList.id)
  @JoinColumn({ name: 'articleListId' })
  readonly articleLists?: ArticleLists;

  constructor(
    title: string,
    description?: string,
    images?: string[],
    reviewCount?: number,
    minPrice?: number,
    maxPrice?: number,
  ) {
    this.title = title
    if (description) this.description = description
    if (images) {
      if (images.length > 3) images.length = 3
      images.forEach((img, index) => this[`image${index}`] = img)
    }
    if (reviewCount) this.reviewCount = reviewCount
    if (minPrice) this.minPrice = minPrice
    if (maxPrice) this.maxPrice = maxPrice
  }
}
