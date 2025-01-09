<script setup lang="ts">
// const route = useRoute()
// const currentId = computed(() => route.query.id || '1')
// const { data: personData, pending } = useStarWarsPerson(currentId)

const props = defineProps<{ id: string }>()
const { data: personData, pending } = useStarWarsPerson(props.id)
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="personData">
    <h3>Additional Details</h3>
    <p>Eye Color: {{ personData.eye_color }}</p>
    <p>Birth Year: {{ personData.birth_year }}</p>
    <p>Gender: {{ personData.gender }}</p>
  </div>
  <div v-else>
    No additional details available
  </div>
</template>
