/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { ImagesComponent } from './images.component';
import { ImagesService } from "../images.service";
import 'rxjs/add/operator/toPromise';

describe('Component: Containers', () => {

  let fixture: ComponentFixture<ImagesComponent>;
  let component:    ImagesComponent;

  beforeEach(() => {
    let imagesServiceStub = {
      getImages: () => Promise.resolve(['ubuntu'])
    };

    TestBed.configureTestingModule({
      declarations: [ ImagesComponent ],
      providers: [{provide: ImagesService, useValue: imagesServiceStub}]
    });

    fixture = TestBed.createComponent(ImagesComponent);
    component = fixture.componentInstance;
  });

  it('should return a list of images in docker registry', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.images).toEqual(['ubuntu']);
    });
  }));
});
