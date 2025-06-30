import { CalculatorService } from './calculator.service';
import { OperationDto } from './dto/operation.dto';
export declare class CalculatorController {
    private readonly calculatorService;
    constructor(calculatorService: CalculatorService);
    getInfo(): {
        message: string;
        endpoints: {
            'POST /calculator/add': string;
            'POST /calculator/subtract': string;
            'POST /calculator/multiply': string;
            'POST /calculator/divide': string;
        };
        bodyFormat: {
            a: string;
            b: string;
        };
    };
    add(operationDto: OperationDto): {
        operation: string;
        operands: {
            a: number;
            b: number;
        };
        result: number;
    };
    subtract(operationDto: OperationDto): {
        operation: string;
        operands: {
            a: number;
            b: number;
        };
        result: number;
    };
    multiply(operationDto: OperationDto): {
        operation: string;
        operands: {
            a: number;
            b: number;
        };
        result: number;
    };
    divide(operationDto: OperationDto): {
        operation: string;
        operands: {
            a: number;
            b: number;
        };
        result: number;
    };
}
