import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  termino:string = '';

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() { }

  buscarArtista(){
    // console.log(this.termino);
    this.spotifyService.getArtistas(this.termino)
        .subscribe();
  }

}
