import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // HttpClient needs to be imported into the service

@Injectable(
    // { providedIn: 'root' }
    )
export class HttpService {
    constructor(private _http: HttpClient) { // _http is being injected // attribute of the class
        this.getPokemon();
    }
    getPokemon() {
        let bulbasaur_obs = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
        // bulbasaur_obs.subscribe(data => console.log("Bulbasaur has the following abilities", data['abilities'][0]['ability']['name'], data['abilities'][1]['ability']['name']));
        bulbasaur_obs.subscribe(data => console.log(`Bulbasaur's abilities are ${data['abilities'][0]['ability']['name']} and ${data['abilities'][1]['ability']['name']}`);
        // Bulbasaur's abilities are chlorophyll and overgrow.
    }
}
