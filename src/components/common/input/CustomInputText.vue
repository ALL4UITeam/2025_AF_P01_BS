<script setup>
  import { nextTick, ref, watch,  } from "vue";
	import InputText from 'primevue/inputtext'
	import Button from 'primevue/button';

  const props = defineProps({
      modelValue : {
        type: String,
        required: true,
      },
      placeholder : {
        type: String,
        default : '입력하세요.'
      },
      title : {
        type: String,
        default : ''
      },
      id : {
        type: String,
        required: true,
      },
      disabled: {
        type: Boolean,
        default : false,
      }
  });

  const emit = defineEmits(['update:modelValue']);

  const inputRef = ref(null);

  const clearInput = () => {
    modelValue.value = '';
    emit('update:modelValue', '');

    nextTick(() => {
      if (inputRef.value) {
        const inputElement = inputRef.value.$el;
        if (inputElement) {
          inputElement.focus();
        }
      }

    })
  };

  watch(() => props.modelValue, (newValue) => {
    modelValue.value = newValue
  })

  const modelValue = ref(props.modelValue);

</script>

<template>
  <div class="inputText" :class="{'disabled' : props.disabled}">
    <InputText 
      v-model="modelValue"
      :placeholder="placeholder"
      :title="title"
      :id="id"
      ref="inputRef"
      :disabled="props.disabled"
    />
    <Button v-if="modelValue" @click="clearInput" class="clearButton" title="입력된값 삭제">
      <span class="blind">삭제</span>
      <i aria-hidden="true" class="bi bi-x" />
    </Button>
  </div>
</template>


<style lang="scss" scoped>
	@use '@/assets/scss/contents/input/input_text.scss';
</style>