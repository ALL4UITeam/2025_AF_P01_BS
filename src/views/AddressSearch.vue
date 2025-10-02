<script setup>
import { ref } from 'vue'
import KrdsButton from './commmon/Button.vue'

const address = ref('')
const detailAddress = ref('')

const handleAddressSearch = () => {
  // KRDS API를 사용한 주소 검색 로직
  new daum.Postcode({
    oncomplete: function(data) {
      address.value = data.roadAddress
    }
  }).open()
}
</script>

<template>
  <div class="address-search">
    <h2>주소 검색</h2>
    <div class="address-form">
      <div class="input-group">
        <input 
          type="text" 
          v-model="address" 
          placeholder="도로명 주소" 
          readonly
        />
        <KrdsButton @click="handleAddressSearch">
          주소 검색
        </KrdsButton>
      </div>
      <div class="input-group">
        <input 
          type="text" 
          v-model="detailAddress" 
          placeholder="상세 주소를 입력하세요"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.address-search {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    margin-bottom: 20px;
    color: #333;
  }
}

.address-form {
  .input-group {
    margin-bottom: 16px;
    display: flex;
    gap: 8px;

    input {
      flex: 1;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;

      &:focus {
        outline: none;
        border-color: #2196f3;
      }
    }
  }
}
</style> 