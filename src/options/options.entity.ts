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

    @ManyToOne(() => Contents, (content) => content.option, { onDelete: 'SET NULL' })
    content: Contents

    @ManyToMany(() => Responses, (responses) => responses.options)
    @JoinTable()
    responses: Responses[]
}