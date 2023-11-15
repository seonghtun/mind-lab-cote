import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './user.entity'

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(() => User, (user) => user.task, { onDelete: 'SET NULL' })
    user: User

    constructor(name) {
        this.name = name
    }
}