import { PartialType } from '@nestjs/mapped-types';
import { createResponseDto } from './create-response.dto';

export class updateResponseDto extends PartialType(createResponseDto) { }