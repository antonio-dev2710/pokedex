import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  private urlPokemon:String='https://pokeapi.co/api/v2/pokemon'
  private urlName:String='https://pokeapi.co/api/v2/pokemon-species'
  //pegar o parametro passado pela url
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ){}

  ngOnInit(): void {
    this.pokemon;
  }
  get pokemon(){
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon= this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);

    const name=this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);
    //O forkJoin faz as buscas e dps retorna respostas
    //de pokemon e name, economiza o subscribe
    return forkJoin([ pokemon, name]).subscribe(
      res=> {
        console.log(res);
      }
    )

  }
}
