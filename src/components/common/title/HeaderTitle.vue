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
        default: 'h3'
      },
      mypage: {
        type: Boolean,
        default: false
      }
  });

  const titleStyle = computed(() => ({
    marginTop: props.marginTop,
  }))
</script>
<template>
<component :is="tag" class="headerTitle" :class="{ mypage }" :style="titleStyle">
    {{title}}
  
</component>
</template>

<style lang="scss" scoped>
.headerTitle {
  margin-top:40px;
	font-weight: 700;
	line-height: 150%;		
  font-size:40px;
  letter-spacing: 1px;

  &.mypage {
    position: absolute;
    top:40px;
    left:0;
    margin-top:0;
  }
}
</style>