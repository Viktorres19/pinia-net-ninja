import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/*
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
*/

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {id: 1, title: 'buy some milk', isFav: false},
      {id: 2, title: 'play Gloomhaven', isFav: true}
    ],
    name: 'Mario'
  })
})
