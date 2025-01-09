export const useStarWarsPerson = (id: string | ComputedRef<string>) => {
  const currentId = computed(() => (typeof id === 'string' ? id : id.value))
  const nuxtData = useNuxtData(`star-wars-person-${currentId.value}`)

  if (nuxtData.data.value) {
    return nuxtData
  }

  return useAsyncData(
    `star-wars-person-${currentId.value}`,
    () => $fetch(`https://swapi.py4e.com/api/people/${currentId.value}`),
    {
      server: true,
      lazy: false,
      watch: [currentId]
    }
  )
}
