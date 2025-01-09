<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const currentId = computed(() => route.query.id || '1')

watch(
  () => route.query.id,
  (newId) => {
    console.log({
      newId,
      id: currentId.value,
    })
    if (newId) {
      currentId.value = newId
    }
  }
)

function updateId(newId) {
  router.push({ query: { id: newId } })
}
</script>

<template>
  <div>
    <StarWarsPerson :id="currentId" />
    <SwapiInput :current-id="currentId" @update:id="updateId" />
  </div>
</template>
