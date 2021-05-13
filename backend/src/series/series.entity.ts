import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Series {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  postId: string;

  @Column()
  postTitle: string;
}
