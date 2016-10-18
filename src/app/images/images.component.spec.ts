/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {ImagesComponent} from './images.component';
import {ImagesService} from '../images.service';
import {By} from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';
import * as _ from 'lodash';

describe('Component: Containers', () => {

  let fixture: ComponentFixture<ImagesComponent>;
  let component: ImagesComponent;

  beforeEach(() => {
    let imagesServiceStub = {
      getImages: () => Promise.resolve(['ubuntu'])
    };

    TestBed.configureTestingModule({
      declarations: [ImagesComponent],
      providers: [{provide: ImagesService, useValue: imagesServiceStub}]
    });

    fixture = TestBed.createComponent(ImagesComponent);
    component = fixture.componentInstance;
  });

  it('should return a list of images in docker registry', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let expectedImages = ['ubuntu'];
      expect(component.images).toEqual(expectedImages);
      fixture.detectChanges();
      let imageElements = fixture.debugElement.queryAll(By.css('li')).map(de => de.nativeElement);
      expect(imageElements.length).toBe(expectedImages.length);
      _.zip(imageElements, expectedImages)
        .forEach(imageAndName => expect(imageAndName[0].textContent).toEqual(imageAndName[1]));
    });
  }));
});
