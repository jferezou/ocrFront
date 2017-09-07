import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Resultat } from './resultat';

@Injectable()
export class ResultatService {
    url = "http://localhost:8089/ocr/services/rest/traitement/t1";
    constructor(private http:Http) { }
   
    getResultatWithPromise(): Promise<String> {
        return this.http.get(this.url).toPromise()
	    .then(this.extractData)
	    .catch(this.handleErrorPromise);
    }
    private extractData(res: Response) {
		let body = res.json();
        return body;
    }
    private handleErrorPromise (error: Response | any) {
		console.error(error.message || error);
		return Promise.reject(error.message || error);
    }	
	
} 