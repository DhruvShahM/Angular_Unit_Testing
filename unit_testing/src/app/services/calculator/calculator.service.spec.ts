/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('Service: Calculator', () => {
  let mockLoggerService: any;
  let calculator: CalculatorService;
  beforeEach(() => {
    console.log('calling before each');
    mockLoggerService = jasmine.createSpyObj(CalculatorService, ['log']);
    calculator = new CalculatorService(mockLoggerService);
  })

  it('should add two numbers', () => {
    console.log('calling add');
    let result = calculator.add(2, 3);
    expect(result).toBe(5);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  })

  it('should substract two numbers', () => {
    console.log('calling substract');
    let result = calculator.substract(3, 2);
    expect(result).toBe(1);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  })
});

