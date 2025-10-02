import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export default defineStore('loading', () => {
  const visible = ref<boolean>(false)

  const visibleGetter = computed<boolean>(()=>visible.value)

  const toggleVisible = ():void=>{
    visible.value = !visible.value
  }

  function onVisible():void{
    visible.value = true
  }

  const offVisible = ():void=>{
    visible.value = false
  }

  return { visible, visibleGetter, toggleVisible, onVisible, offVisible }
})