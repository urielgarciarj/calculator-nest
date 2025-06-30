"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorService = void 0;
const common_1 = require("@nestjs/common");
let CalculatorService = class CalculatorService {
    add(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new common_1.BadRequestException('Both operands must be numbers');
        }
        return a + b;
    }
    subtract(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new common_1.BadRequestException('Both operands must be numbers');
        }
        return a - b;
    }
    multiply(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new common_1.BadRequestException('Both operands must be numbers');
        }
        return a * b;
    }
    divide(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new common_1.BadRequestException('Both operands must be numbers');
        }
        if (b === 0) {
            throw new common_1.BadRequestException('Division by zero is not allowed');
        }
        return a / b;
    }
};
exports.CalculatorService = CalculatorService;
exports.CalculatorService = CalculatorService = __decorate([
    (0, common_1.Injectable)()
], CalculatorService);
//# sourceMappingURL=calculator.service.js.map