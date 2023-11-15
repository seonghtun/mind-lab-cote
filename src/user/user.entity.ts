import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { Car } from 'src/car/car.entity';
import { Task } from './task.entity';
import { Meeting } from './meeting.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    gender: string;

    @Column()
    age: number;

    @OneToOne(() => Car)
    @JoinColumn()
    car: Car;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({ nullable: true })
    carId: number;

    @OneToMany(() => Task, (task) => task.user, { nullable: true })
    task: Task[]

    @ManyToMany(() => Meeting, (meetings) => meetings.user)
    @JoinTable()
    meetings: Meeting[]
}