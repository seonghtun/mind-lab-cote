import { Args, Int, Resolver } from "@nestjs/graphql";
import { ServeysService } from "./serveys.service";
import { Query } from "@nestjs/common";
import { Serveys } from "./serveys.entity";

@Resolver(of => Serveys)
export class ServeyResolver {
    constructor(
        private readonly serveysService: ServeysService,
    ) { }

    @Query(returns => Serveys, { name: 'servey' })
    async getServey(@Args('id', { type: () => Int }) id: number): Promise<Serveys> {
        return this.serveysService.getServeyById(id)
    }

    @Query(returns => [Serveys])
    async getServeys() {
        return this.serveysService.getAllServeys()
    }

}