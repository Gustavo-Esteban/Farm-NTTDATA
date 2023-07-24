import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtor } from '../models/Produtor';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutorService {
  urlApi = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  cadastraProdutor(
    produtor: Produtor
  ): Observable<Produtor> {
    return this.httpClient.post<Produtor>(
      this.urlApi + '/Produtor',
      produtor
    );
  }

  updateProdutor(produtor: Produtor): Observable<Produtor> {
    return this.httpClient.put<Produtor>(
      this.urlApi + `/Produtor/${produtor.id}`,
      produtor
    );
  }

  deleteProdutor(produtor: Produtor): Observable<Produtor> {
    return this.httpClient.delete<Produtor>(
      this.urlApi + `/Produtor/${produtor.id}`
    );
  }

  getProdutor(id: number): Observable<Produtor> {
    return this.httpClient.get<Produtor>(this.urlApi + `/Produtor/${id}`);
  }

  listaProdutores(): Observable<Produtor[]> {
    return this.httpClient.get<Produtor[]>(this.urlApi + '/Produtor');
  }

  getTotalHectares(): Observable<number> {
    return this.listaProdutores().pipe(
      map((produtores) => {
        return produtores.reduce((total, produtor) => total + produtor.areaTotalHectares / 10000, 0);
      })
    );
  }
}
