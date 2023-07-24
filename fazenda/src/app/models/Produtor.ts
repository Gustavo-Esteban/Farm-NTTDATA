import { Culturas } from "./Culturas";
import { Estado } from "./Estado";

export interface Produtor {
  id: number;
  cpfCnpj: string;
  nomeProdutor: string;
  nomeFazenda: string;
  cidade: string;
  estado: Estado[];
  areaTotalHectares: number;
  areaAgricultavelHectares: number;
  areaVegetacaoHectares: number;
  culturas: Culturas;
}
