import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class ParseIdPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const id = parseInt(value, 10);
    if (isNaN(id)) {
      throw new BadRequestException('id Must be a number');
    }
    if (id < 1) {
      throw new BadRequestException('id Must be greater than 0');
    }
    return id;
  }
}
