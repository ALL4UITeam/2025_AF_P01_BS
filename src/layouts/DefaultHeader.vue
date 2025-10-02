<script setup>
	import { ref, onMounted, nextTick, onBeforeUnmount, computed } from 'vue'
  import Button from 'primevue/button'
  import { menuData } from '@/constants/menuData'
  import AlarmPopup from '@/components/common/popup/AlarmPopup.vue'
  
  const activeMenuIndex = ref(null)
  const focusedMenuIndex = ref(null)
  const isAlarmPopupOpen = ref(false)
  const alarmCount = ref(1) // 임시 카운트 값 

  const toggleAlarmPopup = () => {
    if (alarmCount.value > 0) {
      isAlarmPopupOpen.value = !isAlarmPopupOpen.value
    }
  }

  const closeAlarmPopup = () => {
    isAlarmPopupOpen.value = false
  }

  const toggleMenu = (index) => {
    if (focusedMenuIndex.value === index) {
      activeMenuIndex.value = activeMenuIndex.value === index ? null : index
    }
  }

  const handleFocus = (index) => {
    focusedMenuIndex.value = index
  }

  const handleBlur = (event) => {
    const headerNav = document.querySelector('.header__nav')
    const relatedTarget = event.relatedTarget
    
    if (!headerNav?.contains(relatedTarget)) {
      focusedMenuIndex.value = null
      activeMenuIndex.value = null
    }
  }

  const closeMenu = (event) => {
    const headerNav = document.querySelector('.header__nav')
    if (headerNav && !headerNav.contains(event.target)) {
      activeMenuIndex.value = null
      focusedMenuIndex.value = null
    }
  }

  const handleBreadcrumbFocus = () => {
    activeMenuIndex.value = null
    focusedMenuIndex.value = null
  }

  onMounted(() => {
    document.addEventListener('click', closeMenu)
    const breadcrumbElements = document.querySelectorAll('.breadcrumbBox a, .breadcrumbBox button')
    breadcrumbElements.forEach(element => {
      element.addEventListener('focus', handleBreadcrumbFocus)
    })
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', closeMenu)
    const breadcrumbElements = document.querySelectorAll('.breadcrumbBox a, .breadcrumbBox button')
    breadcrumbElements.forEach(element => {
      element.removeEventListener('focus', handleBreadcrumbFocus)
    })
  })
</script>

<template>
<ul id="skipArea" class="skip__navi">
  <li><a href="#gnb" title="메인메뉴 바로가기">메인메뉴 바로가기</a></li>
  <li><a class="outline_light" href="#content" title="본문 바로가기">본문 바로가기</a></li>
</ul>

<div class="header__wrap">
  <div class="header">
    <div class="header__inner">
      <div class="header__utill">
        <h1 class="header__logo"><a href="/" title="메인이동하기"><img src="@/assets/images/common/img_logo.png" alt="주소기반산업지원서비스" /></a></h1>
        <ul class="header__utillList">
          <li><Button class="button mypage">마이페이지</Button></li>
          <li><Button class="button alarm" @click="toggleAlarmPopup" title="알림">알림</Button><span v-if="alarmCount > 0" class="header__alarmCount">{{ alarmCount }}</span></li>
        </ul>
      </div>
    </div>

    <AlarmPopup :is-open="isAlarmPopupOpen" @close="closeAlarmPopup" />

    <ul class="header__nav" id="gnb">
      <li v-for="(menu, index) in menuData" :key="index">
        <Button 
          class="header__gnbButton" 
          :class="{ active: activeMenuIndex === index }"
          title="메뉴 열기"
          @click.stop="toggleMenu(index)"
          @focus="handleFocus(index)"
          @blur="handleBlur"
        >{{ menu.title }}</Button>
        <div class="header__gnb" :class="{ active: activeMenuIndex === index }">
          <dl class="header__gnbDescription">
            <dt>{{ menu.title }}</dt>
            <dd v-html="menu.description"></dd>
          </dl>
          <ul class="header__gnbList">
            <li v-for="(item, itemIndex) in menu.items" :key="itemIndex" class="header__gnbItem">
              <a :href="item.link" :title="item.title" class="header__gnbLink">
                <div class="header__gnbTitle">{{ item.title }}</div>
                <p class="header__gnbText" v-html="item.text"></p>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</div>


</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/layout/header.scss';
</style>