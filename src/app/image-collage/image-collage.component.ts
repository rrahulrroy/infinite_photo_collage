import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-collage',
  templateUrl: './image-collage.component.html',
  styleUrls: ['./image-collage.component.css']
})
export class ImageCollageComponent implements OnInit {
  images: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    const page = Math.floor(this.images.length / 100) + 1;
    //const apiUrl = `https://picsum.photos/v2/list?page=${page}&limit=100`;
    const apiUrl = `https://picsum.photos/v2/list?page=2&limit=100`;
    this.http.get(apiUrl).subscribe((data: any) => {
      this.images = this.images.concat(data);
    });
  }
}
