import { Entity, Column, ObjectIdColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id?: string;

  @Column({ default: null })
  name: string;

  @Column({ default: null })
  email: string;

  @Column({ default: null })
  username: string;
}
