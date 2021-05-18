import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  tags: string;
}
