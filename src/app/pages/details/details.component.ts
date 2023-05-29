import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';
//rever aula 13 e 14
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  private urlPokemon:String='https://pokeapi.co/api/v2/pokemon'
  private urlName:String='https://pokeapi.co/api/v2/pokemon-species'


  //começar a mostrar o pokemon na página
  public pokemon: any;
  //pegar o parametro passado pela url

  //tratamento de erros
  public isLoading:boolean=false;
  public apiError:boolean=false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ){}

  ngOnInit(): void {
    this.Getpokemon();
  }
  public Getpokemon(){
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon= this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);

    const name=this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);
    //O forkJoin faz as buscas e dps retorna respostas
    //de pokemon e name, economiza o subscribe
    return forkJoin([ pokemon, name]).subscribe({
      next: (res): any => {
        this.pokemon= res;
        this.isLoading=true;

      },
      error: (err) => {
        this.apiError=true
      }

    }

    );

  }
}
