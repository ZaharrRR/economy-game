<template>
  <div class="factory">
    <div>
      {{ props.factory.name }} {{ props.factory.money }}$
      {{ numberOfWorkers }}workers {{ overalHappynes }}
    </div>
    <div>
      {{ props.factory.produce.name }} cost - {{ props.factory.produce.price }}$
    </div>
    <div v-for="(group, index) in props.factory.workers" :key="index">
      {{ group.name }} {{ group.number }}people {{ group.qualification }}%
      qualification {{ group.happynes }}% happy
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FactoryProps } from "./Factory.types";

const props = defineProps<FactoryProps>();

const numberOfWorkers = ref<number>(0);
const overalHappynes = ref<number>(getOveralHappynes());

props.factory.workers.forEach((group) => {
  numberOfWorkers.value += group.number;
});

function getOveralHappynes(): number {
  const totalHappy = ref<number>(0);

  props.factory.workers.forEach((group) => {
    totalHappy.value += group.number;
  });

  return (overalHappynes.value +=
    totalHappy.value / props.factory.workers.length);
}
</script>

<style scoped>
.factory {
  @apply border-gray-200 border p-3;
}
</style>
