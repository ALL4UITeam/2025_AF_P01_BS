<script setup>
  import { computed } from "vue";

  const props = defineProps({
      title: {
        type: String,
        required : true
      },
      marginTop: {
        type: String,
        default : ''
      },
      tag: {
        type: String,
        default: 'h4'
      }
  });

  const subTitleStyle = computed(() => ({
    marginTop: props.marginTop,
  }))
</script>
<template>
<component :is="tag" class="subHeaderTitle" :style="subTitleStyle">
    {{title}}
</component>
</template>

<style lang="scss" scoped>
.subHeaderTitle {
  margin-top:48px;
	font-weight: 700;
	line-height: 150%;		
  font-size:32px;
  letter-spacing: 1px;
}
</style>