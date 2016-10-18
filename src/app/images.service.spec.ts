/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {ImagesService} from './images.service';

import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

import {
  HttpModule, XHRBackend, Response, ResponseOptions
} from '@angular/http';

import 'rxjs/add/operator/toPromise';

describe('Service: Images', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ImagesService,
        {provide: XHRBackend, useClass: MockBackend}
      ],
      imports: [HttpModule],
    });
  });

  it('should send request to backend and return images in registry',
    async(inject([ImagesService, XHRBackend], (service: ImagesService, backend: MockBackend) => {
      let options = new ResponseOptions({status: 200, body: {repositories: ['ubuntu']}});
      let response = new Response(options);
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
      service.getImages().then(images => {
        expect(images).toEqual(['ubuntu']);
      });
    })));
});
