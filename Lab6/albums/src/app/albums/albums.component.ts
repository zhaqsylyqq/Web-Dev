import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { ALBUMS } from '../fake-db';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  loaded: boolean;
  newAlbum: Album;

  constructor(private albumService: AlbumService) {
    this.albums = [];
    this.loaded = true;
    this.newAlbum = {} as Album;
  }

  ngOnInit(): void {
    // this.albums = ALBUMS;
    this.getAlbums();
  }

  getAlbums() {
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  addAlbum() {
    this.albumService.addAlbum(this.newAlbum).subscribe((album) => {
      this.albums.push(album);
      this.newAlbum = {} as Album;
    });
  }

  deleteAlbum(badAlbum: Album) {
    this.albums = this.albums.filter((album) => album.id !== badAlbum.id);
  }
}
