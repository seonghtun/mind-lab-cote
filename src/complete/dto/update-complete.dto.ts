import { PartialType } from '@nestjs/mapped-types';
import { createCompleteDto } from './create-complete.dto';

export class updateCompleteDto extends PartialType(createCompleteDto) { }