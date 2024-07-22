export interface GettAllDeliveriesByDeliver {
  motorista?: Motorista;
  bairro?: Bairro;
  entregasRealizadas: number;
  entregasSemSucesso: number;
  totalEntregas: number;
}

export interface Motorista {
  nome: string;
}

export interface Bairro {
  nome: string;

}
