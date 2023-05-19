import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//necessario colocar o HTTPCLIENT np app mudeles
export class PokeApiService {

  private url: string ="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100"
  constructor(private http:HttpClient) { }
}
