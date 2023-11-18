import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { createContentDto } from './dto/create-contents.dto';
import { updateContentDto } from './dto/update-content.dto';

@Controller('content')
export class ContentsController {
    constructor(
        private readonly contentsService: ContentsService
    ) { }

    @Get()
    getAllContents() {
        return this.contentsService.getAllContents()
    }

    @Get(':id')
    getContentsById(@Param('id') id: number) {
        return this.contentsService.getContentsById(id)
    }

    @Post()
    createContent(@Body() contentData: createContentDto) {
        return this.contentsService.createContent(contentData)
    }

    @Patch(':id')
    updateContent(@Param('id') id: number, @Body() contentData: updateContentDto) {
        console.log(contentData)
        return this.contentsService.updateContentById(id, contentData)
    }

    @Delete(':id')
    deleteContent(@Param('id') id: number) {
        return this.contentsService.deleteContent(id)
    }
}
