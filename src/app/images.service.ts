import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ImagesService {

  constructor(private http: Http) { }

  getImages(): Promise<String[]> {
    return this.http.get('/v2/_catalog')
      .toPromise()
      .then(response => response.json().repositories as String[]);
  }

}
