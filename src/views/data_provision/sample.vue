<script setup>
	import { ref, onMounted, computed, watch } from 'vue'
    import Button from 'primevue/button'
    import { Calendar as VCalendar, DatePicker } from 'v-calendar'
    import 'v-calendar/style.css'
    
    //탭
    const tabItems = ref([
        {label:'주소정보 다운로드', route:'/addressInformation/AddressDownloadDetails'},
        {label:'데이터 구성', route:'/addressInformation/DataOrganization'},
        {label:'스키마 구성', route:'/addressInformation/SchemaComposition'},
    ]);

    // 달력 관련 상태
    const dates = ref();
    const month = ref();
    const year = ref();
    const currentDate = ref(new Date());

    // 월 선택 캘린더의 값이 변경될 때 날짜 선택 캘린더의 값 업데이트
    watch(month, (newMonth) => {
        if (newMonth) {
            const newDate = new Date(newMonth);
            currentDate.value = newDate;
        }
    });

    const attributes = ref([
        {
            highlight: {
                color: 'blue',
                fillMode: 'light'
            },
            dates: [
                {
                    start: new Date(2025, 5, 5),
                    end: new Date(2025, 5, 10)
                }
            ]
        },
        {
            dot: true,
            dates: [
                new Date(2025, 5, 11),
                new Date(2025, 5, 12),
                new Date(2025, 5, 13),
                new Date(2025, 5, 14),
            ],
        },
        {
            dot: 'red',
            dates: [
                new Date(2025, 5, 21),
                new Date(2025, 5, 22),
                new Date(2025, 5, 23),
            ],
        },
        {
            dot: {
                style: {
                    backgroundColor: 'brown',
                },
            },
            dates: [
                new Date(2025, 5, 1),
                new Date(2025, 5, 2),
                new Date(2025, 5, 3),
            ],
        },
    ]);
</script>

<template>
	<div class="contentHeader">
		<h2>주소정보 다운로드</h2>
	</div>
	
    <TabMenu :model="tabItems" :activeIndex="1" class="tabList">
        <template #item="{ item, props }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a :href="href" v-bind="props.action" @click="navigate" :title="`${item.label} 이동하기`">
                    {{item.label}}
                </a>
            </router-link>
        </template>
    </TabMenu>

    <div>
        <h3>도로명 주소 한글</h3>
        <Button>체험하기</Button>
    </div>

    <p>
        도로명주소한글DB는 도로명주소 기준의 DB입니다.약 600만여 건의 도로명주소로 구성으로,  여러 개의 건물이 하나의 도로명주소를 갖는 집합건물(예: 아파트)의 경우 한 건의 주소정보를 제공합니다.
    </p>

    <table>
        <caption>도로명주소한글DB 테이블입니다. 제공기관,담당부서 전화번호, 데이터 분류, 데이터 유형, 등록일자, 수정일자의 정보가 있습니다.</caption>
        <tbody>
            <tr>
                <th scope="col">제공기관</th>
                <td>한국지역정보개발원</td>
                <th scope="col">담당부서 전화번보</th>
                <td>02-0000-0000</td>
            </tr>
            <tr>
                <th scope="col">데이터 분류</th>
                <td>공개하는 주소</td>
                <th scope="col">데이터 유형</th>
                <td>TXT</td>
            </tr>
            <tr>
                <th scope="col">등록일자</th>
                <td>2022.04.12</td>
                <th scope="col">수정일자</th>
                <td>2022.04.12</td>
            </tr>
        </tbody>
    </table>

    <div>
        <h4>데이터 다운로드</h4>
        <div>
            <Button>데이터 연계 신청</Button>
        </div>
    </div>

    <div>
        <div>체크박스</div>
        <div>
            <Button>월별</Button>
            <Button>일별</Button>
        </div>
    </div>


    <VCalendar 
        :attributes="attributes"
        v-model="month"
        is-expanded
        :columns="2"
        :from-page="{ month: 1, year: 2024 }"
        :to-page="{ month: 12, year: 2024 }"
        @update:from-page="(page) => month = new Date(page.year, page.month - 1)"
    />

    <div>
        <div>선택한 데이터 <strong>21</strong>건</div>
        <Button>다운로드</Button>
    </div>

</template>

