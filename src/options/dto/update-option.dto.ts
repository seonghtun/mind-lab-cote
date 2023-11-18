import { PartialType } from '@nestjs/mapped-types';
import { createOptionDto } from './create-option.dto';

export class updateOptionDto extends PartialType(createOptionDto) { }