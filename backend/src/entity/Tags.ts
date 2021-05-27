import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Posts } from './Posts';

@Entity()
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Posts, (posts) => posts.tags)
  posts: Posts[];
}
