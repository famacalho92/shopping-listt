export interface Elemento {
    nombre: string;
    lugar: string;
  }
  
  export interface Lista {
    id: number;
    nombre: string;
    fecha: string;
    elementos: Elemento[];
  }
  