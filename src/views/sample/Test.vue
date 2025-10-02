<script setup>
    import { ref, computed, onMounted, nextTick, onBeforeUnmount } from "vue";

    const activeIndex = ref(0);
    const menuItems = ref([
        {dmenu:'주소정보통계',smenu:'주요',counternum:''},
        {dmenu:'주소정보통계',smenu:'주요',counternum:''},
        {dmenu:'주소정보통계',smenu:'주요',counternum:''},
        {dmenu:'주소정보통계',smenu:'주요',counternum:''},
        {dmenu:'주소정보통계',smenu:'주요',counternum:''},
    ])

    const moveBoxPosition = ref({ top: 0, left: 0 });
    const moveBoxSize = ref({ width: 0, height: 0 });
    const activeMenuIndex = ref(0);

    const handleMenuClick = (event, index) => {
        activeMenuIndex.value = index;
        const menuElement = event.currentTarget;
        const rect = menuElement.getBoundingClientRect();
        const wrapRect = menuElement.closest('.situationBoard__keyStatisticsHeaderMenu').getBoundingClientRect();
                
        moveBoxPosition.value = {
            top: rect.top - wrapRect.top,
            left: rect.left - wrapRect.left
        };
        moveBoxSize.value = {
            width: rect.width,
            height: rect.height
        };
    };

    const updateMoveBoxSize = () => {
        console.log('updateMoveBoxSize called');
        const menuElements = document.querySelectorAll('.statContentMenu');
        if (menuElements.length > 0) {
            const activeMenu = menuElements[activeMenuIndex.value];
            if (activeMenu) {
                const rect = activeMenu.getBoundingClientRect();
                const wrapRect = activeMenu.closest('.situationBoard__keyStatisticsHeaderMenu').getBoundingClientRect();
                
                // 크기 업데이트
                moveBoxSize.value = {
                    width: rect.width,
                    height: rect.height
                };
                
                // 좌표 업데이트 - 상대적 위치 계산
                moveBoxPosition.value = {
                    top: rect.top - wrapRect.top,
                    left: rect.left - wrapRect.left
                };

                console.log('Position:', moveBoxPosition.value);
                console.log('Size:', moveBoxSize.value);
            }
        } 
    };

    const handleResize = () => {
        console.log('resize event triggered');
        nextTick(() => {
            updateMoveBoxSize();
        });
    };

    onMounted(async () => {
        await nextTick();
        updateMoveBoxSize();

        // 화면 크기 변경 시 moveBox 크기 업데이트
        window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
    });
</script>

<template>

    <div class="situationBoard">
        <div class="situationBoard__menu">

            <div class="situationBoard__menuSideBar">

                <div class="situationBoard__header">
                    <p class="situationBoard__title">
                        주소정보 상황판 <br><span class="situationBoard__text">2025년  04월</span>
                    </p>
                </div>
                <div class="situationBoard__menuGidWapp">
                    <div class="situationBoard__menuGrid">
                        <div
                            v-for="(item, index) in menuItems"
                            :key="index"
                            class="menuItem"
                            :class="{active: activeIndex === index}"
                            @click="handleItemClick(index)"
                        >
                            
                            <ul>
                                <li class="dMenu_1">{{item.dmenu}}주소정보통계</li>
                                <li class="sMenu_1">{{item.smenu}}</li>
                                <li class="counterNum_1">{{item.counternum}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="situationBoard__content">
            <div class="situationBoard__contentBox">
            
                <div class="situationBoard__contentBoxTop">
                    <div class="situationBoard__infoTxtBox">주소정보통계 &gt; 주요통계</div>
                    <div class="situationBoard__videoPlayTime">
                        홍보영상 재생까지 남은 시간 : <span class="situationBoard__videoMinTxt" id="videoMinTxt">40분</span>  
                        <img src="@/assets/images/common/arrow_time_1.png">
                    </div>
                    <div id="excelDownLoadBtnBox" class="situationBoard__excelDownLoadBtn">
                        <button>엑셀 다운로드</button>
                    </div>
                </div>
            
                <div class="situationBoard__contentChartBox">
                    <!-- 서브메뉴 변경 시간바 -->
                    <div class="situationBoard__submenuChangeTimeBarWrap">
                        <div class="situationBoard__submenuChangeTimeBar" id="submenuChangeTimeBar"></div>
                    </div>
                    <!-- //서브메뉴 변경 시간바 -->
                    <div class="situationBoard__contentChartBoxSub">
                        
                        <!-- tab1 -->
                        <div class="situationBoard__keyStatistics situationBoard__tab" :class="{active : activeIndex === 0}">
                            <div class="situationBoard__keyStatisticsHeader">
                                <div class="situationBoard__keyStatisticsHeaderMenu">
                                    <div class="heightBarMoveWapp"
                                        :style="{ 
                                            top: `${moveBoxPosition.top}px`, 
                                            left: `${moveBoxPosition.left}px`,
                                            width: `${moveBoxSize.width}px`,
                                            height: `${moveBoxSize.height}px`
                                        }"
                                    ></div>             
                                    <div class="stateYearMonTxt">'25년  3월말</div>
                                    
                                    <div class="statContentMenu_1">
                                        <div class="statContentMenu menuMargin scmtk_0 " @click="handleMenuClick($event, 0)">
                                            <div class="statContentMenuTitle scmt_0">도로명</div>
                                            <div class="statContentMenuBottom">
                                                <div class="statContentMenuInnerBox">
                                                    <div class="statContentMenuTxtBox scmtxt_1" data-cnt="0" style="color:#0055CC;">0건</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="statContentMenu menuMargin scmtk_1" @click="handleMenuClick($event, 1)">
                                            <div class="statContentMenuTitle scmt_1" style="background-color: #0060E5; font-size:18px; ">도로명주소</div>
                                            <div class="statContentMenuBottom">
                                                <div class="statContentMenuInnerBox">
                                                    <div class="statContentMenuTxtBox scmtxt_2" style="color:#0060E5;">0건</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="statContentMenu scmtk_2" @click="handleMenuClick($event, 2)">
                                            <div class="statContentMenuTitle scmt_2" style="background-color: #006AFF; font-size:18px;">사물주소</div>
                                            <div class="statContentMenuBottom">
                                                <div class="statContentMenuInnerBox">
                                                    <div class="statContentMenuTxtBox scmtxt_3" style="color:#006AFF;"></div>
                                                <div class="loadingSmallBox lsb_3"><img src="@/assets/images/common/csv_loading.gif"></div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="statContentMenu_2">
                                        <div class="statContentMenu menuMargin scmtk_3" @click="handleMenuClick($event, 3)">
                                            <div class="statContentMenuTitle scmt_3" style="background-color: #3373CC; font-size:18px;">지점번호판</div>
                                            <div class="statContentMenuBottom">
                                                <div class="statContentMenuInnerBox">
                                                    <div class="statContentMenuTxtBox scmtxt_4" style="color:#3373CC;"></div>
                                                <div class="loadingSmallBox lsb_4"><img src="@/assets/images/common/csv_loading.gif" ></div></div>
                                            </div>
                                        </div>
                                        <div class="statContentMenu menuMargin scmtk_4" @click="handleMenuClick($event, 4)">
                                            <div class="statContentMenuTitle scmt_4" style="background-color: #3981E5; font-size:18px;">기초번호판</div>
                                            <div class="statContentMenuBottom">
                                                <div class="statContentMenuInnerBox">
                                                    <div class="statContentMenuTxtBox scmtxt_5" style="color:#3981E5;">0건</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="statContentMenu scmtk_5" @click="handleMenuClick($event, 5)">
                                            <div class="statContentMenuTitle scmt_5" style="background-color: #408FFF; font-size:18px;">사물주소판</div>
                                            <div class="statContentMenuBottom">
                                                <div class="statContentMenuInnerBox">
                                                    <div class="statContentMenuTxtBox scmtxt_6" style="color:#408FFF;"></div>
                                                <div class="loadingSmallBox lsb_6"><img src="@/assets/images/common/csv_loading.gif" ></div></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="statLineChartWapp">
                                    <div class="statLineChartRoundBox">
                                        <div class="statLineChartTitle">
                                            <span class="subMenuName">도로명</span> - 
                                            <span id="accYearTxt">1</span>년간 
                                            <span id="incrementalValueTxt" class="incrementalValueTxt">0</span>개 증가(
                                            <span id="incrementalRatioTxt" class="incrementalRatioTxt">0</span>%)
                                            <div id="chartDataYear_1"  class="chartDataYear_1">'24년 12월말</div>
                                        </div>
                                        <div class="statLineChartBox">
                                            차트
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="statBottomWapp">
                            
                                <div class="statBottomLeftWapp">
                                    <div class="statBottomHorChartBox">
                                        <div class="statBottomHorChartBox_1">
                                            <div class="statBottomHorChartTitle">
                                                <span class="subMenuName">도로명</span> 시도구분
                                                <div class="chartDataYear_2">'25년  3월말</div>
                                            </div>
                                            <div class="statHorChartWapp">
                                                차트
                                            </div>
                                        </div>
                                        <div class="statBottomHorChartBox_2">
                                            <div class="statBottomHorChartTitle">
                                                <span class="subMenuName">도로명</span> 상세구분
                                                <div class="chartDataYear_2">'25년  3월말</div>
                                            </div>
                                            <div class="statHorChartWapp">
                                                차트
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="mapChartWapp" class="statBottomRightWapp">
                                    <div id="dataPeriodTxt" class="dataPeriodTxt">'25년 01월 ~ 3월말</div>
                                    <div id="subMapMenuNameBox" class="subMapMenuNameBox">
                                        <span class="subMenuName">도로명</span> - 금년도 부여 건수(누적) : <span id="rodanmAccCurrentNumTxt" class="rodanmAccCurrentNumTxt">16</span>건
                                    </div>
                                    <div class="statsChartMapBoxStyle">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- //tab1 -->
                        <!-- tab2 -->
                        <div class="contentChtWapp situationBoard__tab" :class="{active : activeIndex === 1}">
                            
                            <div class="subjectTxt1">
                                도로명 방식
                                <div class="time">기준일 : 실시간</div>
                            </div>
                            <div class="contentChartRe">
                                <div id="chtBox-1">
                                    <p class="subjectTxt3">도로명 부여권자</p>
                                    <div class="chtBoxInner">
                                        <div class="grid-box-0">1</div>
                                    </div>									
                                    <div class="chtBoxInner">
                                        <div class="grid-box-0">1</div>
                                        <div class="grid-box-0">2</div>
                                    </div>
                                    
                                    <div class="linebar"></div>

                                    <p class="subjectTxt3">도로명 갱신체계</p>
                                    <div class="chtBoxInner">
                                        <div class="grid-box-0">1</div>
                                        <div class="grid-box-0">2</div>
                                        <div class="grid-box-0">3</div>
                                    </div>	
                                    
                                </div>
                            </div>
                                                        
                            <div class="subjectTxt2">
                                격자방식(국가지점번호격자)
                                <div class="inText">기준일 : 고정</div>
                            </div>						
                            <div class="contentChartRe">
                                <div id="chtBox-5">
                                    <div class="chtBoxInner">
                                        <div class="grid-box-1">차트</div>
                                        <div class="k-chart-13">
                                            차트
                                        </div>
                                    </div>																	
                                </div>
                            </div>
                            
                            <div class="subjectTxt2">구역방식</div>						
                            <div class="contentChartRe type01">
                                <div id="chtBox-4">
                                    <p class="subjectTxt3">국가기초구역군(구역번호 할당)<span id="totCnt-10" class="totCntTxtBox" data-cnt="0"> (합계 : 0개)</span></p>
                                    <div class="chtBoxInner">
                                        <div class="grid-box-1">
                                            <div class="noDataBox">데이터가 없습니다.</div>
                                        </div>
                                        <div class="grid-box-1">
                                            <div class="noDataBox">데이터가 없습니다.</div>
                                        </div>
                                        <div class="grid-box-1">
                                            <div class="noDataBox">데이터가 없습니다.</div>
                                        </div>
                                    </div>
                                    
                                    <p class="subjectTxt3">행정구역 현황<span id="totCnt-03" class="totCntTxtBox" data-cnt="0"> (합계 : 4,110,184,741개)</span></p>
                                    <div class="chtBoxInner">
                                        <div class="grid-box-1">차트</div>
                                        <div class="k-chart-13">
                                            차트
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- //tab2 -->
                        <div class="situationBoard__tab" :class="{active : activeIndex === 2}">2</div>
                        <div class="situationBoard__tab" :class="{active : activeIndex === 3}">3</div>
                        <div class="situationBoard__tab" :class="{active : activeIndex === 4}">4</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.situationBoard {
    display: grid;
    grid-template-columns: 220px 1fr;
    grid-template-areas: "menu content";
    grid-gap: 0px;
    display: -ms-grid;
    -ms-grid-columns: 220px 0px 1fr;
    min-width: 1280px;

    &__menu {
        height: 100vh;
        background-color: #F2F3F9;
    }

    &__menuSideBar {
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        position: relative;
    }
    &__header {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        text-align: center;
        padding: 10px 0 10px 0;
    }
    &__title {
        position: relative;
        font-size: 25px;
        font-weight: bold;
        color: #0b487b;
    }
    &__text {
        font-size: 20px; color: #B21016;
    }
    &__menuGidWapp {
        height: 100%;
        box-sizing: border-box;
        padding-top: 80px;
        background-color: #ffffff;
        overflow: auto;
    }
    &__menuGrid {
        width:100%;
        padding:0px 10px 10px 10px;
    }
    &__content {
        position: relative;
        background-color: #F2F3F9;
        height: calc(100vh - 63px);
    }
    &__contentBox {
        position: relative;
        width: 100%;
        height: 100%;
    }
    &__contentBoxTop {
        height: 50px;
        width: 100%;
        background-color: #ffffff;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.2);
    }
    &__contentChartBox {
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 50px;
    }
    &__infoTxtBox {
        font-size: 18px;
        padding: 16px 0 0 20px;
        font-weight: bold;
    }
    &__videoPlayTime {
        display: block;
        position: absolute;
        top: 9px;
        right: 160px;
        z-index: 2;
        border: 0px solid #000000;
        font-weight: bold;
        padding: 8px;
        color: rgb(77, 77, 77);
        cursor: pointer;

        img {
            vertical-align:middle; 
            width:auto;
            height:15px;
            margin-left:3px;
        }
    }
    &__videoMinTxt {
        color: rgb(234, 67, 53);
    }
    &__excelDownLoadBtn {
        cursor: pointer;
        position: absolute;
        top: 8px;
        right: 40px;
        z-index: 2;
        border: 1px solid #BFBFBF;
        border-radius: 5px;
        font-weight: bold;
        padding: 8px;
        display: block;
    }
    &__contentChartBox {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 50px;
    }
    &__contentChartBoxSub {
        border: 0px solid #000000;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 20px;
        overflow: auto;
        box-shadow: inset 10px 0px 10px -10px rgba(0, 0, 0, 0.2);
    }
    &__keyStatistics {
        border:0px solid #000000; 
        height:100%; 
        position: relative;
    }
    &__keyStatisticsHeader {
        height:35%;
        border:0px solid #000000; 
    }
    &__keyStatisticsHeaderMenu {
        float: left; 
        width:45%;
        height:100%; 
        position: relative;
    }
    &__submenuChangeTimeBarWrap {
        position:absolute; 
        top:50px; 
        left:0; 
        width:100%; 
        height:4px; 
        border:0px solid #000000;
    }
    &__submenuChangeTimeBar {
        width: 9%; 
        height: 100%; 
        background-color: rgb(175, 176, 181); 
        border-radius: 5px;
    }
    &__tab {
        display: none;

        &.active {
            display:block;
        }
    }
    .stateYearMonTxt {
        height: 8%;
        text-align: right;
        padding-top: 5px;
        font-weight: bold;
        font-size: 12px;
    }
    .statContentMenu_1 {
        border: 0px solid #000000;
        width: 100%;
        height: 46%;
        display: flex;
        flex-direction: row;
        padding-bottom: 5px;
    }
    .statContentMenu_2 {
        border: 0px solid #000000;
        width: 100%;
        height: 46%;
        display: flex;
        flex-direction: row;
        padding-top: 5px;
    }
    .statContentMenuTitle {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 55px;
        text-align: center;
        line-height: 55px;
        font-size: 23px;
        color: #ffffff;
        font-weight: bold;
        background-color: #0060E5;
        font-size: 18px;
    }
    .statContentMenuBottom {
        height: 100%;
        width: 100%;
        padding-top: 55px;
        text-align: center;
    }
    .statContentMenuInnerBox {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .statContentMenuTxtBox {
        text-align: center;
        font-size: 23px;
        font-weight: bold;
    }
    .menuItem{
		width:100%; 
		height:100px;
		box-sizing:border-box;
		padding:10px;
		cursor: pointer;
		border-radius:8px;
        margin: 10px 0px 0px 30px; 
        width: 85%; 
        border: 1px solid rgb(217, 217, 217); 
        background-color: rgb(255, 255, 255);

        &.active {
            border-width: 6px 2px 2px; 
            border-style: solid; 
            border-color: rgb(0, 85, 204); 
            background-color: rgb(255, 255, 255);
            width: 100%;
            margin-left:0;

            .sMenu_0 {
                margin:0;
                font-size:23px; 
                padding:20px 0px 10px 0px;
            }
        }
	}
	
	.menuOnOffBtn{
		cursor:pointer; 
		position: absolute; 
		top:8px; 
		right:40px; 
		z-index: 2; 
		border:1px solid #BFBFBF;
		border-radius:5px;
		font-weight:bold;
		padding:8px;
	}
    .menuItem ul > li:nth-child(1){
		font-size: 12px;
	}
	
	.menuItem ul > li:nth-child(2){
		padding:14px 0px 8px 0px; 
		font-size: 18px; 
		font-weight: bold; 
		text-align: center;
		border:0px solid #000000;
	}
	
	.menuItem ul > li:nth-child(3){
		font-size: 15px; 
		font-weight: bold; 
		text-align: center;
	}
    .statContentMenu {
        position: relative;
        float: left;
        flex:1;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubix-bezier(.25, .8, .25, 1);
        background-color: #ffffff;
        height: 100%;
        border-radius: 10px 10px 10px 10px;
        cursor: pointer;

        & + .statContentMenu {
            margin-left:10px;
        }
        &.active {
            .statContentMenuTitle {
                background-color: rgb(0, 85, 204);
                font-size: 25px;
                text-shadow: rgb(0, 68, 163) -1px 0px, rgb(0, 68, 163) 0px 1px, rgb(0, 68, 163) 1px 0px, rgb(0, 68, 163) 0px -1px;
            }
            .statContentMenuTxtBox {
                font-size:25px;
            }
        }
    }

    .statLineChartWapp {
        border: 0px solid #000000;
        float: left;
        width: 55%;
        height: 100%;
        padding-left: 15px;
    }
    .statLineChartRoundBox {
        position: relative;
        overflow: hidden;
        padding-top: 50px;
        width: 100%;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubix-bezier(.25, .8, .25, 1);
        background-color: #ffffff;
        height: 100%;
        border: 0px solid #000000;
        border-radius: 10px 10px 10px 10px;
    }
    .statLineChartTitle {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        font-weight: bold;
        padding-left: 15px;
    }
    .statLineChartBox {
        width: 100%;
        height: 100%;
        border: 0px solid #000000;
        overflow-y: hidden;
        padding: 10px;
    }
    .incrementalValueTxt {
        color: #0055CC;
    }
    .incrementalRatioTxt {
        color: #B21016;
    }
    .chartDataYear_1 {
        position: absolute; 
        top:0; 
        right:15px; 
        font-size:12px; 
        border:0px solid #000000;
    }
    .statBottomWapp {
        position: relative;
        border: 0px solid #000000;
        height: 65%;
        padding-top: 15px;
        display: flex;
        align-items: center;
    }
    .statBottomLeftWapp {
        height: 100%;
        width: 82.2%;
    }
    .statBottomRightWapp {
        position: relative;
        border: 0px solid #000000;
        height: 100%;
        width: 100%;
        padding-left: 15px;
    }
    .statBottomHorChartBox {
        height: 100%;
        display: flex;
        align-items: center;
    }
    .statBottomHorChartBox_1 {
        position: relative;
        overflow: hidden;
        padding-top: 50px;
        width: 100%;
        height: 100%;
        margin-right: 15px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubix-bezier(.25, .8, .25, 1);
        background-color: #ffffff;
        height: 100%;
        border-radius: 10px 10px 10px 10px;
    }
    .statBottomHorChartTitle {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        font-weight: bold;
        padding-left: 15px;
    }
    .statHorChartWapp {
        width: 100%;
        height: 100%;
        border: 0px solid #000000;
        overflow-y: auto;
        padding: 10px;
    }
    .statBottomHorChartBox_2 {
        position: relative;
        overflow: hidden;
        padding-top: 50px;
        width: 100%;
        height: 100%;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubix-bezier(.25, .8, .25, 1);
        background-color: #ffffff;
        height: 100%;
        border: 0px solid #000000;
        border-radius: 10px 10px 10px 10px;
    }
    .chartDataYear_2 {
        position: absolute; top:0; right:15px; font-size:12px; border:0px solid #000000;
    }
    .statBottomRightWapp {
        position: relative;
        border: 0px solid #000000;
        height: 100%;
        width: 100%;
        padding-left: 15px;
    }
    .statsChartMapBoxStyle {
        width: 100%;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubix-bezier(.25, .8, .25, 1);
        background-color: #ffffff;
        height: 100%;
        border: 0px solid #000000;
        border-radius: 10px 10px 10px 10px;
    }
    .dataPeriodTxt {
        position: absolute; right:40px; top:15px; z-index:100; font-size:12px; font-weight:bold;
    }
    .subMapMenuNameBox {
        position: absolute; right:45px; bottom:60px; z-index:100; font-size:20px; font-weight:bold;
    }
    .rodanmAccCurrentNumTxt {
        color:#0055CC;
    }
    .subjectTxt1 {
        position: relative;
        padding: 10px;
        font-size: 23px;
        font-weight: bold;
        .time {
            position: absolute;
            top: 18px;
            right: 0;
            z-index: 10;
            font-size: 12px;
        }
    }
    .subjectTxt2 {
        position: relative;
        padding: 10px;
        font-size: 23px;
        font-weight: bold;
        margin-top: 20px;

        .inText {
            position: absolute; top:18px; right:0; z-index: 10; font-size: 12px;
        }
    }
    .subjectTxt3 {
        color:rgb(77, 77, 77);
        font-size:19px;
        font-weight: 700;
        letter-spacing: -0.325px;
    }
    .contentChartRe {
        border-radius: 10px;
        background-color: #ffffff;
        padding: 15px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

        &.type01 {
            margin-bottom:20px;
        }
    }
    .chtBoxInner {
        display: flex;
        -ms-display: flexbox;
        border: 0px solid #000000;
        overflow: hidden;
        margin-top:10px;
    }
    .grid-box-0 {
        position: relative;
        height: 300px;
        -ms-flex: 1;
        flex: 1;
    }
    .grid-box-1 {
        position: relative;
        height: 350px;
        -ms-flex: 1;
        flex: 1;
    }
    .noDataBox {
        position:absolute; line-height:350px; background-color:rgba(255,255,255, 0.5); top:0; left:0;  width:100%; height:100%; z-index:100; font-size:15px; font-weight:bold; text-align:center;
    }
    .linebar {
        border: 0;
        height: 1px;
        background: #E0E6F1;
        margin: 10px 0 20px 0;
    }
    .chtBoxInner {
        display: flex;
        -ms-display: flexbox;
        border: 0px solid #000000;
        overflow: hidden;
    }
    .k-chart-13 {
        height: 350px; flex: 2 1 0%; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); position: relative;
    }
    .loadingSmallBox {
        position: absolute; top:50%; left:50%; margin : -18px 0 0 -15px;

        img {
            width:30px; height:auto;
        }
    }
    .heightBarMoveWapp {
        border: 5px solid rgb(255, 127, 14);
        border-radius: 10px;
        position: absolute;
        left: 0px;
        top: 22.4844px;
        z-index: 100;
        width: 232px;
        height: 121px;
        transition: all 0.3s ease;
    }
}
</style>