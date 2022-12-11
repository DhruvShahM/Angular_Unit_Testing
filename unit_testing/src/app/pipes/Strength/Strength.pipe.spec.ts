/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { StrengthPipe } from './Strength.pipe';

describe('Pipe: Strengthe', () => {
  it('create an instance', () => {
    let pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('it should display weak if 5 value is passed',()=>{
    const pipe=new StrengthPipe();
    expect(pipe.transform(5)).toEqual('5 (weak)')
  })

  it('it should display strong if 11 value is passed',()=>{
    const pipe=new StrengthPipe();
    expect(pipe.transform(11)).toEqual('11 (strong)')
  })

  it('it should display strong if 22 value is passed',()=>{
    const pipe=new StrengthPipe();
    expect(pipe.transform(22)).toEqual('22 (strongest)')
  })
});
