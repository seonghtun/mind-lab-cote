import { Serveys } from "src/serveys/serveys.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Completes {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToMany(() => Serveys, (serveys) => serveys.completes)
    serveys: Serveys[]

    @Column()
    respondent: string

    @Column()
    complete: boolean
}