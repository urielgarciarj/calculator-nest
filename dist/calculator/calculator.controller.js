"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorController = void 0;
const common_1 = require("@nestjs/common");
const calculator_service_1 = require("./calculator.service");
const operation_dto_1 = require("./dto/operation.dto");
let CalculatorController = class CalculatorController {
    constructor(calculatorService) {
        this.calculatorService = calculatorService;
    }
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
    add(operationDto) {
        const result = this.calculatorService.add(operationDto.a, operationDto.b);
        return {
            operation: 'addition',
            operands: { a: operationDto.a, b: operationDto.b },
            result: result
        };
    }
    subtract(operationDto) {
        const result = this.calculatorService.subtract(operationDto.a, operationDto.b);
        return {
            operation: 'subtraction',
            operands: { a: operationDto.a, b: operationDto.b },
            result: result
        };
    }
    multiply(operationDto) {
        const result = this.calculatorService.multiply(operationDto.a, operationDto.b);
        return {
            operation: 'multiplication',
            operands: { a: operationDto.a, b: operationDto.b },
            result: result
        };
    }
    divide(operationDto) {
        const result = this.calculatorService.divide(operationDto.a, operationDto.b);
        return {
            operation: 'division',
            operands: { a: operationDto.a, b: operationDto.b },
            result: result
        };
    }
};
exports.CalculatorController = CalculatorController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CalculatorController.prototype, "getInfo", null);
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [operation_dto_1.OperationDto]),
    __metadata("design:returntype", void 0)
], CalculatorController.prototype, "add", null);
__decorate([
    (0, common_1.Post)('subtract'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [operation_dto_1.OperationDto]),
    __metadata("design:returntype", void 0)
], CalculatorController.prototype, "subtract", null);
__decorate([
    (0, common_1.Post)('multiply'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [operation_dto_1.OperationDto]),
    __metadata("design:returntype", void 0)
], CalculatorController.prototype, "multiply", null);
__decorate([
    (0, common_1.Post)('divide'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [operation_dto_1.OperationDto]),
    __metadata("design:returntype", void 0)
], CalculatorController.prototype, "divide", null);
exports.CalculatorController = CalculatorController = __decorate([
    (0, common_1.Controller)('calculator'),
    __metadata("design:paramtypes", [calculator_service_1.CalculatorService])
], CalculatorController);
//# sourceMappingURL=calculator.controller.js.map