<template>
  <div class="factory">
    <div>{{ props.factory.name }} {{ props.factory.money }}$</div>
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
</script>

<style scoped>
.factory {
  @apply border-gray-200 border p-3;
}
</style>
