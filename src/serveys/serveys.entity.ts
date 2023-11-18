import { Completes } from "src/complete/complete.entity";
import { Contents } from "src/contents/contents.entity";
import { Responses } from "src/responses/responses.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class Serveys {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    registrant: string

    @ManyToMany(() => Contents, (contents) => contents.serveys)
    @JoinTable()
    contents: Contents[]

    @ManyToMany(() => Completes, (completes) => completes.serveys)
    @JoinTable()
    completes: Completes[]

    @ManyToMany(() => Responses, (responses) => responses.serveys)
    @JoinTable()
    responses: Responses[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}