import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {
  private setAllPokemons:any;
  public getAllPokemons:any;

  public apiError:boolean=false;
  constructor(private pokeApiService: PokeApiService){

  }

  ngOnInit(): void{
     this.pokeApiService.apiListALLPokemons.subscribe({
      next:(res) :any=> {
        this.setAllPokemons=res.results
        this.getAllPokemons=this.setAllPokemons;

      },
      error:(error)=>{
        this.apiError=true;
      }
     }

    )
  }
  //regastar do emmiter
  public getSearch(value:string){


    const filter = this.setAllPokemons.filter((res:any)=>{
      return !res.name.indexOf(value.toLowerCase());

    });
    this.getAllPokemons=filter;

  }
}
