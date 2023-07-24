import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { Produtor } from 'src/app/models/Produtor';
import { ProdutorService } from 'src/app/services/produtor.service';
import { Estados } from 'src/app/shared/Estados';

@Component({
  selector: 'app-graficos-page',
  templateUrl: './graficos-page.component.html',
  styleUrls: ['./graficos-page.component.scss'],
})
export class GraficosPageComponent {
  totalProdutores: number = 0;
  totalHectaresFazendas: number = 0;

  dataPorEstado!: ChartData;
  dataPorCulturas!: ChartData;
  dataPorUsoDeSolo!: ChartData;


  constructor(private produtorService: ProdutorService,
    ){}


  ngOnInit() {
    this.produtorService.listaProdutores().subscribe(
      (produtores: Produtor[]) => {
        this.updateCharts(produtores);
      },
      (error) => {
        console.error('Erro ao obter dados do produtor', error);
      }
    );

    this.produtorService.listaProdutores().subscribe(
      (produtores) => {
        this.totalProdutores = produtores.length;
        this.produtorService.getTotalHectares().subscribe(
          (totalHectares) => {
            this.totalHectaresFazendas = totalHectares;
          },
          (error) => {
            console.error('Erro ao buscar a soma dos hectares das fazendas:', error);
          }
        );
      },
      (error) => {
        console.error('Erro ao buscar produtores:', error);
      }
    );
  }

  updateCharts(produtores: Produtor[]): void {
    const culturas: number[] = [0, 0, 0, 0, 0];
    let totalAreaAgricultavel = 0;
    let totalAreaVegetacao = 0;



  produtores.forEach((produtor: Produtor) => {

    totalAreaAgricultavel += Number(produtor.areaAgricultavelHectares);
    totalAreaVegetacao += Number(produtor.areaVegetacaoHectares);

    if (produtor.culturas.soja) culturas[0]++;
    if (produtor.culturas.milho) culturas[1]++;
    if (produtor.culturas.algodao) culturas[2]++;
    if (produtor.culturas.cafe) culturas[3]++;
    if (produtor.culturas.canaDeAcucar) culturas[4]++;
  });


  const estados = produtores.map((produtor) => produtor.estado[0].acronimo);


    this.dataPorEstado = {
      labels: estados,
      datasets: [
        {
          data: Array(estados.length).fill(1),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8c2eff', '#33FF5C'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8c2eff', '#33FF5C'],
        },
      ],
    };


    this.dataPorCulturas = {
      labels: ['Soja', 'Milho', 'Algodão', 'Café', 'Cana de Açúcar'],
      datasets: [
        {
          data: culturas,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8c2eff', '#33FF5C'],
        },
      ],
    };

    this.dataPorUsoDeSolo = {
      labels: ['Área Agricultável', 'Área de Vegetação'],
      datasets: [
        {
          data: [totalAreaAgricultavel, totalAreaVegetacao],
          backgroundColor: ['#FF6384', '#36A2EB'],
        },
      ],
    };
  }

  options: ChartOptions = {
    responsive: true,
  };
}

