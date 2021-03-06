import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista:any;
  pistas:any[];

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
        .map(parametros => parametros['id'])
        .subscribe( id => {
          this.spotifyService.getArtista(id)
              .subscribe( data => this.artista = data);
          this.spotifyService.getTop(id)
              .subscribe( data => this.pistas = data);
        });
  }

}
