import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
//necessario colocar o HTTPCLIENT np app mudeles
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';
  constructor(private http: HttpClient) { }

  //criar o metodo que puxar os pokemons sintaxe TS
  //fica obs oq ta acontecendo na requisição
  public get apiListALLPokemons(): Observable<any> {
    //pipe como se fosse um filtro, vai criar  uma conexao
    //so passa as urls
    return this.http.get<any>(this.url).pipe(
      //utilizar o tap para separar por etapas
      tap(res => res),
      tap(res => {
        //dentro dos results que estão os pok
        res.results.map((resPokemons: any) => {
          //quando passa por um array faz um chamado
          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status=res
          )
        })
      })

    )

  }

  /**
   * apiGetPokemons
   */
  public apiGetPokemons(url: string): Observable<any> {

    return this.http.get<any>(url).pipe(
      map(
        res => res

      )
    )
  }
}
