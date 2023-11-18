import { PartialType } from '@nestjs/mapped-types';
import { createServeyDto } from './create-servey.dto';

export class updateServeyDto extends PartialType(createServeyDto) { }