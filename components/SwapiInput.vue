<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{ currentId: string }>()

const emit = defineEmits(['update:id'])

const id = ref(props.currentId)

watch(() => props.currentId, (newVal) => {
  id.value = newVal
})

function emitId() {
  emit('update:id', id.value)
}
</script>


<template>
  <div>
    <label for="idInput">Enter ID:</label>
    <input
      id="idInput"
      type="number"
      v-model="id"
      @input="emitId"
      min="1"
      placeholder="Enter an ID"
    />
  </div>
</template>
