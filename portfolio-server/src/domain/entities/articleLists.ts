import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { Articles } from './articles'

@Entity()
export class ArticleLists {
  /** ID */
  @PrimaryGeneratedColumn()
  readonly id: number

  /** 親ID */
  @Column()
  readonly articleId: number

  /** タイトル */
  @Column({ length: 100 })
  title: string

  /** ヘッダーレベル */
  @Column()
  heading: number

  /** 画像 */
  @Column()
  image: string

  /** メインの説明文 */
  @Column({ length: 256 })
  mainDescription: string

  /** 説明文の補足 */
  @Column({ length: 1000 })
  subDescription: string

  /** 作成日時 */
  @CreateDateColumn()
  readonly createdAt: Date

  /** 更新日時 */
  @UpdateDateColumn()
  readonly updatedAt: Date

  /** 親テーブル */
  @ManyToOne(type => Articles, article => article.articleLists)
  @JoinColumn({ name: 'articleId' })
  readonly article?: Articles;

  constructor(
    title: string,
    heading: number,
    image?: string,
    mainDescription?: string,
    subDescription?: string,
  ) {
    this.title = title
    this.heading = heading
    if (image) this.image = image
    if (mainDescription) this.mainDescription = mainDescription
    if (subDescription) this.subDescription = subDescription
  }
}
