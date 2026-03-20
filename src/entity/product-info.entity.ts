import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductGroupEntity } from './product-group.entity';
import { ProductOptionEntity } from './product-option.entity';

@Entity('ct_product_info')
export class ProductInfoEntity {
  @PrimaryGeneratedColumn()
  productNo: number;

  @Column({
    type: 'enum',
    enum: [
      'virtual_office',
      'locker',
      'certificate',
      'hr',
      'parking',
      'goods',
      'property',
    ],
  })
  productType: string;

  @Column({
    type: 'enum',
    enum: ['default', 'physical', 'gifticon', 'digital'],
    default: 'default',
    nullable: true,
  })
  productKind: string | null;

  @Column({ type: 'int' })
  groupSno: number;

  @Column({
    type: 'enum',
    enum: ['n', 'y'],
    default: 'n',
    nullable: true,
  })
  siteMemberOnlyFl: 'n' | 'y' | null;

  @Column({
    type: 'enum',
    enum: ['none', 'ys', 'sh', 'bg'],
    default: 'none',
    nullable: true,
  })
  siteCd: string | null;

  @Column({ type: 'varchar', length: 50 })
  productNm: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  productDesc: string | null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  message: string | null;

  @Column({ type: 'int', default: 1 })
  sortNo: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  priceLabel: string | null;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  productPrice: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  salePrice: string;

  @Column({ type: 'int', default: 0, nullable: true })
  stockCnt: number | null;

  @Column({
    type: 'enum',
    enum: ['n', 'y'],
    default: 'n',
    nullable: true,
  })
  optionFl: 'n' | 'y' | null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  optionDesc: string | null;

  @Column({
    type: 'enum',
    enum: ['none', 'date', 'time', 'etc', 'quantity'],
    default: 'none',
    nullable: true,
  })
  optionType: string | null;

  @Column({
    type: 'enum',
    enum: ['none', 'date', 'time', 'etc', 'quantity'],
    default: 'none',
    nullable: true,
  })
  dataType: string | null;

  @Column({
    type: 'enum',
    enum: ['n', 'y'],
    default: 'n',
    nullable: true,
  })
  subscriptionFl: 'n' | 'y' | null;

  @Column({
    type: 'enum',
    enum: ['n', 'y'],
    default: 'y',
    nullable: true,
  })
  consultingFl: 'n' | 'y' | null;

  @Column({ type: 'json', nullable: true })
  productPoint: string[] | null;

  @Column({ type: 'varchar', length: 256, nullable: true })
  thumbnail: string | null;

  @Column({ type: 'json', nullable: true })
  images: string[] | null;

  @Column({ type: 'varchar', length: 200, nullable: true })
  descUrl: string | null;

  @Column({
    type: 'enum',
    enum: ['n', 'y', 't'],
    default: 'n',
    nullable: true,
  })
  status: 'n' | 'y' | 't' | null;

  @Column({
    type: 'enum',
    enum: ['y', 'n'],
    default: 'n',
    nullable: true,
  })
  displayFl: 'y' | 'n' | null;

  @Column({
    type: 'enum',
    enum: ['y', 'n'],
    default: 'n',
    nullable: true,
  })
  appDisplayFl: 'y' | 'n' | null;

  @Column({
    type: 'enum',
    enum: ['n', 'y'],
    default: 'n',
    nullable: true,
  })
  payDisplayFl: 'n' | 'y' | null;

  @Column({ type: 'datetime', nullable: true })
  regDt: Date | null;

  @Column({ type: 'datetime', nullable: true })
  modDt: Date | null;

  @ManyToOne(() => ProductGroupEntity, (group) => group.products)
  @JoinColumn({ name: 'groupSno', referencedColumnName: 'sno' })
  group: ProductGroupEntity;

  @OneToMany(() => ProductOptionEntity, (option) => option.product)
  optionInfo: ProductOptionEntity[];
}
