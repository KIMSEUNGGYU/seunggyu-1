import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

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

  @ManyToMany((type) => Tags)
  @JoinTable()
  tags: Tags[];
}
