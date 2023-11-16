import { Contents } from "src/contents/contents.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class Serveys {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    registrant: string

    @ManyToMany(() => Contents, (contents) => contents.serveys)
    @JoinTable()
    contents: Contents[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}