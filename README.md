# Simple Calculator API - NestJS

A simple calculator REST API built with NestJS that provides basic mathematical operations.

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Input validation
- Error handling (division by zero, invalid inputs)

## Installation

```bash
# Install dependencies
npm install

# Run in development mode
npm run start:dev

# Run in production mode
npm run build
npm run start:prod
```

## API Endpoints

The API runs on `http://localhost:3000` by default.

### Get API Information
- **GET** `/calculator`
- Returns information about available endpoints

### Mathematical Operations

All operations require a POST request with JSON body containing two numbers:

```json
{
  "a": 10,
  "b": 5
}
```

#### Addition
- **POST** `/calculator/add`
- Example: `10 + 5 = 15`

#### Subtraction
- **POST** `/calculator/subtract`
- Example: `10 - 5 = 5`

#### Multiplication
- **POST** `/calculator/multiply`
- Example: `10 * 5 = 50`

#### Division
- **POST** `/calculator/divide`
- Example: `10 / 5 = 2`
- Note: Division by zero returns an error

## Example Usage

### Using curl:

```bash
# Addition
curl -X POST http://localhost:3000/calculator/add \
  -H "Content-Type: application/json" \
  -d '{"a": 10, "b": 5}'

# Subtraction
curl -X POST http://localhost:3000/calculator/subtract \
  -H "Content-Type: application/json" \
  -d '{"a": 10, "b": 3}'

# Multiplication
curl -X POST http://localhost:3000/calculator/multiply \
  -H "Content-Type: application/json" \
  -d '{"a": 4, "b": 7}'

# Division
curl -X POST http://localhost:3000/calculator/divide \
  -H "Content-Type: application/json" \
  -d '{"a": 15, "b": 3}'
```

### Response Format

```json
{
  "operation": "addition",
  "operands": {
    "a": 10,
    "b": 5
  },
  "result": 15
}
```

## Error Handling

The API handles various error cases:

- **Invalid input**: Returns 400 Bad Request if operands are not numbers
- **Division by zero**: Returns 400 Bad Request with appropriate error message
- **Missing parameters**: Returns 400 Bad Request if required parameters are missing

## Development

```bash
# Start development server with hot reload
npm run start:dev

# Run tests
npm run test

# Build for production
npm run build
```
