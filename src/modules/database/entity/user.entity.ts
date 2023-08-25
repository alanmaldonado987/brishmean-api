import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class UserEntity{

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    password: string;
}