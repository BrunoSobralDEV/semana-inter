import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

//decorator
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastName: string;

  @Column()
  accounterNumber: number;

  @Column()
  accountDigit: number;

  @Column()
  wallet: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
