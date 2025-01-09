<script setup lang="ts">
const props = defineProps<{ id: string }>()

const { data } = await useFetch(`https://swapi.py4e.com/api/people/${props.id}`)

</script>

<template>
  <div v-if="data">
    <h2>{{ data.name }}</h2>
    <p>Height: {{ data.height }}</p>
    <p>Mass: {{ data.mass }}</p>
    <p>Hair Color: {{ data.hair_color }}</p>
  </div>
  <div v-else>
    No character data available
  </div>
</template>
