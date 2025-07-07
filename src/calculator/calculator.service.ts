import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  add(a: number, b: number): number {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new BadRequestException('Both operands must be numbers!');
    }
    return a + b;
  }

  subtract(a: number, b: number): number {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new BadRequestException('Both operands must be numbers!');
    }
    return a - b;
  }

  multiply(a: number, b: number): number {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new BadRequestException('Both operands must be numbers!');
    }
    return a * b;
  }

  divide(a: number, b: number): number {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new BadRequestException('Both operands must be numbers!');
    }
    if (b === 0) {
      throw new BadRequestException('Division by zero is not allowed!');
    }
    return a / b;
  }
}
