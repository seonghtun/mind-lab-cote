import { PartialType } from '@nestjs/mapped-types';
import { createContentDto } from './create-contents.dto';

export class updateContentDto extends PartialType(createContentDto) { }