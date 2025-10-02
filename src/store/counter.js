import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const c = ref(0)
  const doubleCount = computed(() => c.value * 2)
  function increment() {
    c.value++
  }

  return { c, doubleCount, increment }
})
