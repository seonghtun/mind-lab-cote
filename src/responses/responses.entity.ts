import { Contents } from "src/contents/contents.entity";
import { Options } from "src/options/options.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, ManyToOne, CreateDateColumn } from "typeorm";

@Entity()
export class Responses {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    respondent: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToMany(() => Options, (options) => options.responses, { onDelete: 'SET NULL' })
    options: Options[]

    @ManyToMany(() => Contents, (contents) => contents.responses, { onDelete: 'SET NULL' })
    contents: Contents[]
}