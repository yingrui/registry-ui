import { Component, OnInit } from '@angular/core';
import { ImagesService } from "../images.service";

@Component({
  selector: 'app-containers',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images: String[] = [];

  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    this.imagesService.getImages().then(images => this.images = images);
  }

}
