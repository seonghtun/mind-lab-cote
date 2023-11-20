import { Contents } from "src/contents/contents.entity";
import { Responses } from "src/responses/responses.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class Options {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column()
    point: number;

    @Column()
    order: number;

    @ManyToOne(() => Contents, (content) => content.option, { onDelete: "CASCADE" })
    content: Contents

    @ManyToMany(() => Responses, (responses) => responses.options, {
        cascade: true
    })
    @JoinTable()
    responses: Responses[]
}