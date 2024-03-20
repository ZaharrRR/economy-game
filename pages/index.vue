<template>
  <GameLayout>
    <div>
      <Head>
        <Title>Home page</Title>
        <Meta
          name="description"
          content="This is a home page of this site"
        ></Meta>
      </Head>
      1
    </div>
  </GameLayout>
</template>

<script setup lang="ts">
import type { Factory, Product, WorkersGroup } from "~/domain/Factory";
import GameLayout from "~/layouts/GameLayout.vue";

const money = ref<number>(100);

const product = ref<Product[]>([]);

const factoryes = ref<Factory[]>(generateRandomFactoryes(5));

function generateRandomProducts(number: number): Product[] {
  const products: Product[] = [];

  for (let i = 0; i < number; i++) {
    const randomProduct: Product = {
      id: Math.random().toString(36).substr(2, 9),
      name: "Product" + (product.value.length + 1),
      price: Math.floor(Math.random() * 299) + 1,
    };

    products.push(randomProduct);
  }

  return products;
}

function generateRandomWorkers(number: number): WorkersGroup[] {
  const workers: WorkersGroup[] = [];

  for (let i = 0; i < number; i++) {
    const randomWorker: WorkersGroup = {
      id: Math.random().toString(36).substr(2, 9),
      name: "WorkerGroup" + (i + 1),
      number: Math.floor(Math.random() * 49) + 1,
      qualification: Math.floor(Math.random() * 99) + 1,
      happynes: Math.floor(Math.random() * 99) + 1,
    };

    workers.push(randomWorker);
  }

  return workers;
}

function generateRandomFactoryes(number: number): Factory[] {
  const factoryes: Factory[] = [];

  for (let i = 0; i < number; i++) {
    const newProduct: Product[] = generateRandomProducts(1);
    product.value.push(newProduct[0]);

    const randomFactory: Factory = {
      id: Math.random().toString(36).substr(2, 9),
      name: "Factory" + (i + 1),
      money: Math.floor(Math.random() * 4999) + 1,
      workers: generateRandomWorkers(5),
      produce: product.value[product.value.length - 1],
    };

    factoryes.push(randomFactory);
  }

  return factoryes;
}
</script>

<style scoped></style>
