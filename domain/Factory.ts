interface Factory {
  id: string;
  name: string;
  money: number;
  workers: WorkersGroup[];
  produce: Product;
}

interface WorkersGroup {
  id: string;
  name: string;
  number: number;
  qualification: number;
  happynes: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
}

export type { Factory, Product, WorkersGroup };
