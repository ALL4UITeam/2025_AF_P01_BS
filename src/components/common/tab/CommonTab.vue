<script setup>
import { ref } from 'vue'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'

const props = defineProps({
    tabs: {
        type: Array,
        required: true,
        // [{ header: string, component: Component }]
    }
})

const activeIndex = ref(0)
</script>

<template>
    <TabView v-model:activeIndex="activeIndex" class="commonTab">
        <TabPanel 
            v-for="(tab, index) in tabs" 
            :key="index"
            :header="tab.header"
        >
            <component :is="tab.component" />
        </TabPanel>
    </TabView>
</template>


<style lang="scss" scoped>
	@use '@/assets/scss/contents/tab/commonTab';
</style> 