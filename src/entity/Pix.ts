import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn
} from 'typeorm';
import { User } from './User';

//decorator
@Entity()
export class Pix{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    status: string;

    //relacionamento
    //requerendo o pagamento
    //ManyToOne = muitos p/ 1 (banco relacional)
    @ManyToOne(() => User, user => user.id)
    @JoinColumn()
    requestingUser: User;

    //usuário que está fazendo o pagamento
    //nullable = campo pode ser nulo
    @ManyToOne(() => User, user => user.id, {nullable: true})
    @JoinColumn()
    payingUser: User;
    //------

    @Column()
    value: number;

    @CreateDateColumn()
    updatedAt: Date

}