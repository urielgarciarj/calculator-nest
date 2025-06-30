import { Controller, Post, Body, Get } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { OperationDto } from './dto/operation.dto';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Get()
  getInfo() {
    return {
      message: 'Simple Calculator API',
      endpoints: {
        'POST /calculator/add': 'Addition operation',
        'POST /calculator/subtract': 'Subtraction operation',
        'POST /calculator/multiply': 'Multiplication operation',
        'POST /calculator/divide': 'Division operation'
      },
      bodyFormat: {
        a: 'number',
        b: 'number'
      }
    };
  }

  @Post('add')
  add(@Body() operationDto: OperationDto) {
    const result = this.calculatorService.add(operationDto.a, operationDto.b);
    return {
      operation: 'addition',
      operands: { a: operationDto.a, b: operationDto.b },
      result: result
    };
  }

  @Post('subtract')
  subtract(@Body() operationDto: OperationDto) {
    const result = this.calculatorService.subtract(operationDto.a, operationDto.b);
    return {
      operation: 'subtraction',
      operands: { a: operationDto.a, b: operationDto.b },
      result: result
    };
  }

  @Post('multiply')
  multiply(@Body() operationDto: OperationDto) {
    const result = this.calculatorService.multiply(operationDto.a, operationDto.b);
    return {
      operation: 'multiplication',
      operands: { a: operationDto.a, b: operationDto.b },
      result: result
    };
  }

  @Post('divide')
  divide(@Body() operationDto: OperationDto) {
    const result = this.calculatorService.divide(operationDto.a, operationDto.b);
    return {
      operation: 'division',
      operands: { a: operationDto.a, b: operationDto.b },
      result: result
    };
  }
}
