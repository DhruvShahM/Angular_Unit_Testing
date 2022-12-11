/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoggerService } from './logger.service';

describe('Service: Logger', () => {
  let service:LoggerService;
  beforeEach(() => {
    // arrange & act
    service=new LoggerService();
  });

  it('should not have any message at starting',()=>{
    // act
    let count=service.message.length;
    //assert
    expect(count).toBe(0);
  })

  it('should add the message when the log is called',()=>{
    // act
    service.log('message');
    //assert
    expect(service.message.length).toBe(1)
  })


  it('should clear all the message when clear is called',()=>{
    service.log('message');
    service.clear();
    // assert
    expect(service.message.length).toBe(0);
  })
});
