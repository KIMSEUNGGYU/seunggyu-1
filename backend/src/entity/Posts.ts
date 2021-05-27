import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Tags } from './Tags';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  date: string;

  @Column('text')
  description: string;

  @Column('text')
  contents: string;

  @ManyToOne(() => Tags, (tags) => tags.posts)
  tags: Tags;
}
