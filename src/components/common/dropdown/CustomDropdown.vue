<script setup>
  import { ref, onMounted, watch } from "vue";
	import Dropdown from 'primevue/dropdown';

  const props = defineProps({
      options: Array,
      modelValue: [String, Number, Object],
      title: String,
      optionLabel : {
        type: String,
        default : 'label'
      },
      inputId : {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        default: ''
      }
  });

  const customDropdown = ref(null);

  const emit = defineEmits(['update:modelValue']);

  const updateValue = (newValue) => {
    emit('update:modelValue', newValue);
  };

  onMounted(() => {
    if (props.title && customDropdown.value) {
      customDropdown.value.$el.setAttribute('title', props.title);
    }
  });

  watch(() => props.title, (newTitle) => {
    if (customDropdown.value) {
      customDropdown.value.$el.setAttribute('title', newTitle);
    }
  })

  
</script>

<template>
  <Dropdown 
    :inputId="inputId" 
    :options="options" 
    :optionLabel="optionLabel"
    :model-value="modelValue"
    :placeholder="placeholder"
    @update:model-value="updateValue"
    ref="customDropdown"
  />
</template>

<style>
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
        padding:10px;
    }
  </style>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/dropdown/dropdown.scss';
</style>