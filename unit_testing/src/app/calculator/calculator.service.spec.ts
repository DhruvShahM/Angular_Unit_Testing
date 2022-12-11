/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoggerService } from '../Logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('Service: Calculator', () => {
  it('should add two numbers',()=>{
    let loggerService=new LoggerService();
    spyOn(loggerService,'log').and.callThrough();
    const calculator=new CalculatorService(loggerService);
    let result=calculator.add(2,3);
    expect(result).toBe(5);
    expect(loggerService.log).toHaveBeenCalled(1);
  })

  it('should substract two numbers',()=>{
    let loggerService=new LoggerService();
    const calculator=new CalculatorService(loggerService);
    let result=calculator.substract(3,2);
    expect(result).toBe(1);
  })
});
