import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Shoud multiply two number', ()=>{
    const result = service.multiply(3,5);
    console.log("result", result);
    expect(result).toBe(15);
  })

  it('Shoud add two number', ()=>{
    const result = service.addition(3,5);
    console.log("result", result);
    expect(result).toBe(8);
  })
});
