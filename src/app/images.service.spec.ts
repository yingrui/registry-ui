/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImagesService } from './images.service';
import {HttpModule} from "@angular/http";

describe('Service: Images', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagesService],
      imports: [HttpModule],
    });
  });

  it('should ...', inject([ImagesService], (service: ImagesService) => {
    expect(service).toBeTruthy();
  }));
});
