<script setup>
import { ref } from 'vue';

const props = defineProps({
    searchKeyword: {
        type: String,
        default: ''
    },
    totalCount: {
        type: Number,
        default: 0
    }
});

// 검색 결과 닫기 함수
const emit = defineEmits(['closeSearchResult']);

const closeSearchResult = () => {
    emit('closeSearchResult');
};

// 검색 결과 샘플 데이터
const sales = ref([
    {
        data:'2015.12.31',
        address:'버스정류장', 
        notice:'고시여부', 
        county:'읍면동', 
        chage:'-', 
    },
]);

// 출입구 데이터
const doorwayTable = ref([
    {
        number:'2015.12.31',
        floor:'버스정류장', 
        entrance:'등록',
        objectadress:'세종특별자치시 나리로 17'
    },
]);


</script>

<template>
    <div id="totalResultBox">
        <div class="resultLayerPopup__innerWrap" style="">	
            <p class="resultLayerPopup__resultText">
                검색어 <strong class="text">"{{ searchKeyword }}"</strong>에 대한 검색결과 총 <strong class="text">{{ totalCount }}</strong>건입니다.
            </p>

            <!-- 검색결과가 없는 경우 -->
            <div class="resultLayerPopup__noSearchResults" style="">
                <p class="resultLayerPopup__noSearchResultText">검색결과가 없는 경우<br> 도로에 부여된 기초번호를 이용하여 위치를 조회할 수 있습니다.</p>
                <div class="resultLayerPopup__noSearchResultsMap">
                    <p class="resultLayerPopup__noSearchResultsMapTitle">지도에서 위치찾기</p>
                    <p class="resultLayerPopup__noSearchResultsMapText">도로명주소 안내도를 확인하여<br>기초번호로 위치를 조회할 수 있습니다.</p>
                    <div class="resultLayerPopup__noSearchResultsMapButton">
                        <button class="commonButton__button" title="위치찾기" >
                            <span class="commonButton__text">위치찾기</span>
                            <i aria-hidden="true" class="bi bi-box-arrow-up-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- //검색결과가 없는 경우 -->
            
            <!-- 시/도, 도로명 필터 -->      
            <div class="resultLayerPopup__detailSearchBox">
                <div class="resultLayerPopup__detailSearchBoxInner">
                    <label for="selectGroupBySido" class="blind">시/도</label>
                    <select id="selectGroupBySido" class="resultLayerPopup__select selectStype01" title="시/도 선택">
                        <option value="">시/도 선택</option>
                        <option title="서울특별시" value="11">서울특별시</option>
                        <option title="경기도" value="41">경기도</option>
                        <option title="경상북도" value="47">경상북도</option>
                    </select>
                    <label for="selectGroupByRoad" class="blind">도로명</label>
                    <select id="selectGroupByRoad" class="resultLayerPopup__select selectStype02" title="도로명 선택" disabled="disabled">
                        <option>도로명 선택</option>
                    </select>
                    <button class="resultLayerPopup__detailSearchButton" type="button" title="시/도, 도로명 검색하기">
                        <i aria-hidden="true" class="bi bi-search"></i>검색
                    </button>
                </div>
                <p class="resultLayerPopup__detailSearchBoxTip">
                    <i aria-hidden="true" class="bi bi-exclamation-circle-fill"></i>주소검색 결과가 많습니다. 도로명을 선택하여 검색 범위를 좁힐 수 있습니다.
                </p>
            </div>
            <!-- 시/도, 도로명 필터 -->     

            <!-- 정렬 -->
            <div class="resultLayerPopup__filter" style="">
                <div class="resultLayerPopup__radio">
                    <input id="RA" type="radio" class="p-radiobutton-input" name="raFirstSort" data-pc-section="input" value="none" checked="checked">
                    <label for="RA">정확도순</label>
                </div>
                <div class="resultLayerPopup__radio">
                    <input id="RB" type="radio" class="p-radiobutton-input" name="raFirstSort" data-pc-section="input" value="road">
                    <label for="RB">도로명 포함</label>
                </div>
                <div class="resultLayerPopup__radio">
                    <input id="RC" type="radio" class="p-radiobutton-input" name="raFirstSort" data-pc-section="input" value="location">
                    <label for="RC">지번 포함</label>
                </div>
                <p class="resultLayerPopup__filterTip">
                    <i aria-hidden="true" class="bi bi-exclamation-circle-fill"></i>
                    입력한 키워드가 선택한 항목에 포함되는 주소정보가 우선정렬 되고, 도로명주소 순으로 정렬됩니다.
                </p>
            </div>

            <div class="resultLayerPopup__scroll">
                <ul class="resultLayerPopup__list">
                    <li>
                        <div class="resultLayerPopup__detailBox">
                            <div class="resultLayerPopup__detailBoxNumber">1</div>
                            <div class="resultLayerPopup__listDetail basic">
                                <div class="resultLayerPopup__listDetailContent moContent">
                                    <span class="number">30103</span>
                                    <button type="button" class="resultLayerPopup__english">영문</button>
                                    <button class="resultLayerPopup__copyButton kor" type="button" title="주소복사하기">복사</button>
                                    <button class="resultLayerPopup__copyButton eng" type="button" title="주소복사하기" style="display: none;">복사</button>
                                </div>
                                <p class="resultLayerPopup__listDetailTitle">
                                    <strong>도로명주소</strong>
                                </p>
                                <div class="resultLayerPopup__listDetailContent pcContent">
                                    <div class="resultLayerPopup__innerBox">
                                        <strong class="roadNameText">세종특별자치시 도움6로 11 (어진동)</strong>
                                        <div class="addrEngInfo" style="display: none;">
                                            <strong>11 Doum 6-ro, Sejong-si</strong>
                                        </div>
                                        <span class="resultLayerPopup__copy type01">
                                            <button class="commonButton__resultButton kor" type="button" title="주소복사하기">복사</button>
                                            <button class="commonButton__resultButton eng" type="button" title="주소복사하기" style="display: none;">복사</button>
                                        </span>
                                    </div>
                                </div>
                                <p class="resultLayerPopup__listDetailTitle">지번</p>
                                <div class="resultLayerPopup__listDetailContent jibun">
                                    <p class="resultLayerPopup__innerBox">
                                        <span class="roadNameText">세종특별자치시 어진동 560 국토교통부, 환경부, 행복도시건설청</span>
                                        <span class="addrEngInfo" style="display: none;">
                                            560
                                            Eojin-dong,
                                            Sejong-si
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div class="resultLayerPopup__function">
                                <div class="resultLayerPopup__functionPostalCodeWrap">
                                    <strong class="resultLayerPopup__functionPostalCodeText">
                                        우편번호
                                    </strong>
                                    <strong class="resultLayerPopup__functionPostalCodeNumber">
                                        30103
                                    </strong>
                                </div>                        
                                <button type="button" class="resultLayerPopup__functionButton en pcContent" title="영문보기" onclick="addrChangeLang('1');">영문</button>
                                <div class="btnChangeLang viewEng" style="display: none;"></div>
                                <button type="button" class="resultLayerPopup__functionButton load" title="도로명정보">도로명정보</button>
                                <button id="btnMiniMaplist1" type="button" class="resultLayerPopup__functionButton map" title="지도에서 찾기">지도보기</button>
                            </div>
                        </div>
                        <div class="resultLayerPopup__moreFunction">
                            <button class="resultLayerPopup__moreButton" type="button" title="더보기 펼치기">
                                <i aria-hidden="true" class="bi bi-plus"></i>
                                <i aria-hidden="true" class="bi bi-dash" style="display: none;"></i>
                                <span>더보기</span>
                            </button>
                            <div class="resultLayerPopup__listDetail more">
                                <p class="resultLayerPopup__listDetailTitle">영문 </p>
                                <div class="resultLayerPopup__listDetailContent">
                                    <div class="resultLayerPopup__innerBox post">
                                        11 Doum 6-ro, Sejong-si
                                        <button id="engAddr_dt_button_1" class="resultLayerPopup__commonButton type01 postButton" type="button" title="우편주소 표기방법 열기">
                                            <span>우편주소 표기방법</span>
                                            <i aria-hidden="true" class="bi bi-arrow-right"></i>
                                        </button>
                                    </div>
                                    <div id="engAddr_dt_button_1_div" class="resultLayerPopup__postDetail">
                                        <p id="engAddr_dt_button_1_enText" class="resultLayerPopup__enText" style="display: none;">
                                            11 Doum 6-ro, Sejong-si, 30103, Republic of Korea
                                        </p>
                                        <div id="engAddr_dt_button_1_notation" class="resultLayerPopup__notation" style="display: none;">
                                            <p class="resultLayerPopup__notationTitle">상세주소(동,층,호)를 포함한 영문 우편주소 표기방법 안내</p>
                                            <dl class="resultLayerPopup__notationList">
                                                <dt>유형1</dt>
                                                <dd>
                                                    <p class="resultLayerPopup__notationListTitle">"동"과 "호"  표기</p>
                                                    <p class="resultLayerPopup__notationListDetail">주소가 "세종특별자치시 도움6로 42"이고 "705동 1104호"인 경우</p>
                                                    <p class="resultLayerPopup__notationListEn">705-1104, 42Doum 6-ro, Sejong-si, 30112, Republic of Korea</p>
                                                </dd>
                                                <dt>유형2</dt>
                                                <dd>
                                                    <p class="resultLayerPopup__notationListTitle">"층"  표기</p>
                                                    <p class="resultLayerPopup__notationListDetail">주소가 "세종특별자치시 도움6로 42"이고 "3층"인 경우</p>
                                                    <p class="resultLayerPopup__notationListEn">3F, 42Doum 6-ro, Sejong-si, 30112, Republic of Korea</p>
                                                </dd>
                                                <dt>유형3</dt>
                                                <dd>
                                                    <p class="resultLayerPopup__notationListTitle">"지하"  표기</p>
                                                    <p class="resultLayerPopup__notationListDetail">주소가 "세종특별자치시 도움6로 42"이고 "지하102"인 경우</p>
                                                    <p class="resultLayerPopup__notationListEn">B102, 42Doum 6-ro, Sejong-si, 30112, Republic of Korea</p>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <p class="resultLayerPopup__listDetailTitle">관할주민센터</p>			
                                <div class="resultLayerPopup__listDetailContent">
                                    <ul class="resultLayerPopup__communityCenter">
                                            <li>
                                                세종특별자치시  어진동 
                                                <span class="resultLayerPopup__phone">
                                                    <a href="tel:044-300-7519" title="관할주민센터 전화연결">
                                                        <i aria-hidden="true" class="bi bi-telephone-fill"></i>
                                                        044-300-7519
                                                    </a>
                                                </span>
                                            </li>
                                    </ul>
                                    <ul class="resultLayerPopup__tip">
                                        <li>
                                            <span class="commonBullet">※</span>관할주민센터는 참고정보이며, 실제와 다를 수 있습니다.
                                        </li>
                                    </ul>
                                </div>
                                <p class="resultLayerPopup__listDetailTitle">주소변동이력 </p>
                                <div class="resultLayerPopup__listDetailContent recordButtonWrap" tabindex="1">
                                    <span class="resultLayerPopup__listDetailContentGap">
                                        <button class="resultLayerPopup__commonButton recordButton" type="button" title="변동이력검색" onclick="addrHitory(this, '36110325808500001100000001_');">
                                            <span>변동이력검색</span><i aria-hidden="true" class="bi bi-arrow-right"></i>
                                        </button>
                                        <input type="hidden" id="histTargetAddr_36110325808500001100000001_" value="세종특별자치시  도움6로 11">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="resultLayerPopup__detailBox">
                            <div class="resultLayerPopup__detailBoxNumber">1</div>
                            <div class="resultLayerPopup__listDetail basic">
                                <div class="resultLayerPopup__listDetailContent moContent">
                                    <span class="number">08866</span>
                                    <button type="button" class="resultLayerPopup__english" onclick="addrChangeLang('1');">영문</button>
                                    <button class="resultLayerPopup__copyButton kor" type="button" title="주소복사하기" onclick="addrCopy('clipKor1')">복사</button>
                                    <button class="resultLayerPopup__copyButton eng" type="button" title="주소복사하기" onclick="addrCopy('clipEng1')" style="display: none;">복사</button>
                                </div>
                                <p class="resultLayerPopup__listDetailTitle">
                                    <strong>도로명주소</strong>
                                </p>
                                <div class="resultLayerPopup__listDetailContent pcContent">
                                    <div class="resultLayerPopup__innerBox">
                                        <strong class="roadNameText">서울특별시 관악구 미성10길 64 (신림동, 뉴서울아파트)</strong>
                                        <div class="addrEngInfo" style="display: none;">
                                            <strong>64 Miseong 10-gil, Gwanak-gu, Seoul</strong>
                                        </div>
                                        <span class="resultLayerPopup__copy type01">
                                            <button class="commonButton__resultButton kor" type="button" title="주소복사하기" onclick="addrCopy('clipKor1')">복사</button>
                                            <button class="commonButton__resultButton eng" type="button" title="주소복사하기" onclick="addrCopy('clipEng1')" style="display: none;">복사</button>
                                        </span>
                                    </div>
                                </div>
                                <p class="resultLayerPopup__listDetailTitle">지번</p>
                                <div class="resultLayerPopup__listDetailContent jibun">
                                    <p class="resultLayerPopup__innerBox">
                                        <span class="roadNameText"><span class="highlight">서울</span>특별시 관악구 신림동 739 뉴<span class="highlight">서울</span><span class="highlight">아파트</span></span>
                                        <span class="addrEngInfo" style="display: none;">
                                            739
                                            Sillim-dong,
                                            Gwanak-gu, Seoul
                                        </span>
                                    </p>
                                    <div class="resultLayerPopup__detailAdressFunction">
                                        <button id="close_detail_1162010200107390000002695" class="resultLayerPopup__detailAdressButton" type="button" title="상세주소(동·층·호) 열기" onclick="javascript:addrDongSelect('1162010200107390000002695','116204160344','64','0',this,'116204160344','1162010200107390000002695','384380.17578171653','682440.7934234121','192','116204160344','','0','1162010200');">
                                            <span>상세주소(동·층·호) 보기</span>
                                            <i aria-hidden="true" class="bi bi-chevron-down"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="resultLayerPopup__function">
                                <div class="resultLayerPopup__functionPostalCodeWrap">
                                    <strong class="resultLayerPopup__functionPostalCodeText">
                                        우편번호
                                    </strong>
                                    <strong class="resultLayerPopup__functionPostalCodeNumber">
                                        08866
                                    </strong>
                                </div>
                                <div class="resultLayerPopup__apt pcContent">아파트</div>
                                <button type="button" class="resultLayerPopup__functionButton en pcContent" title="영문보기">영문</button>
                                <button type="button" class="resultLayerPopup__functionButton load" title="도로명정보">도로명정보</button>
                                <button id="btnMiniMaplist1" type="button" class="resultLayerPopup__functionButton map" title="지도에서 찾기">지도보기</button>
                            </div>
                        </div>
                        <div class="resultLayerPopup__moreFunction">
                            <button class="resultLayerPopup__moreButton" type="button" title="더보기 펼치기">
                                <i aria-hidden="true" class="bi bi-plus"></i>
                                <i aria-hidden="true" class="bi bi-dash" style="display: none;"></i>
                                <span>더보기</span>
                            </button>
                            <div class="resultLayerPopup__listDetail more">
                                <p class="resultLayerPopup__listDetailTitle">영문 </p>
                                <div class="resultLayerPopup__listDetailContent">
                                    <div class="resultLayerPopup__innerBox post">
                                        64 Miseong 10-gil, Gwanak-gu, Seoul
                                        <button id="engAddr_dt_button_1" class="resultLayerPopup__commonButton type01 postButton" type="button" title="우편주소 표기방법 열기" onclick="titleToggle(this, '1');">
                                            <span>우편주소 표기방법</span>
                                            <i aria-hidden="true" class="bi bi-arrow-right"></i>
                                        </button>
                                    </div>
                                    <div id="engAddr_dt_button_1_div" class="resultLayerPopup__postDetail">
                                        <p id="engAddr_dt_button_1_enText" class="resultLayerPopup__enText" style="display: none;">
                                            64 Miseong 10-gil, Gwanak-gu, Seoul, 08866, Republic of Korea
                                        </p>
                                        <div id="engAddr_dt_button_1_notation" class="resultLayerPopup__notation" style="display: none;">
                                            <p class="resultLayerPopup__notationTitle">상세주소(동,층,호)를 포함한 영문 우편주소 표기방법 안내</p>
                                            <dl class="resultLayerPopup__notationList">
                                                <dt>유형1</dt>
                                                <dd>
                                                    <p class="resultLayerPopup__notationListTitle">"동"과 "호"  표기</p>
                                                    <p class="resultLayerPopup__notationListDetail">주소가 "세종특별자치시 도움6로 42"이고 "705동 1104호"인 경우</p>
                                                    <p class="resultLayerPopup__notationListEn">705-1104, 42Doum 6-ro, Sejong-si, 30112, Republic of Korea</p>
                                                </dd>
                                                <dt>유형2</dt>
                                                <dd>
                                                    <p class="resultLayerPopup__notationListTitle">"층"  표기</p>
                                                    <p class="resultLayerPopup__notationListDetail">주소가 "세종특별자치시 도움6로 42"이고 "3층"인 경우</p>
                                                    <p class="resultLayerPopup__notationListEn">3F, 42Doum 6-ro, Sejong-si, 30112, Republic of Korea</p>
                                                </dd>
                                                <dt>유형3</dt>
                                                <dd>
                                                    <p class="resultLayerPopup__notationListTitle">"지하"  표기</p>
                                                    <p class="resultLayerPopup__notationListDetail">주소가 "세종특별자치시 도움6로 42"이고 "지하102"인 경우</p>
                                                    <p class="resultLayerPopup__notationListEn">B102, 42Doum 6-ro, Sejong-si, 30112, Republic of Korea</p>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <p class="resultLayerPopup__listDetailTitle">관할주민센터</p>
                                <div class="resultLayerPopup__listDetailContent">
                                    <ul class="resultLayerPopup__communityCenter">
                                        <li>서울특별시 관악구 미성동 
                                            <span class="resultLayerPopup__phone">
                                                <a href="tel:02-879-4591" title="관할주민센터 전화연결">
                                                    <i aria-hidden="true" class="bi bi-telephone-fill"></i>
                                                    02-879-4591
                                                </a>
                                            </span>
                                        </li>
                                    </ul>
                                    <ul class="resultLayerPopup__tip">
                                        <li>
                                            <span class="commonBullet">※</span>관할주민센터는 참고정보이며, 실제와 다를 수 있습니다.
                                        </li>
                                    </ul>
                                </div>
                                <p class="resultLayerPopup__listDetailTitle">상세건물명 </p>
                                <div class="resultLayerPopup__listDetailContent">
                                    <p class="resultLayerPopup__innerBox">
                                        나동,  가동
                                    </p>
                                </div>
                                <p class="resultLayerPopup__listDetailTitle">주소변동이력 </p>
                                <div class="resultLayerPopup__listDetailContent recordButtonWrap" tabindex="1">
                                    <span class="resultLayerPopup__listDetailContentGap">
                                        <button class="resultLayerPopup__commonButton recordButton" type="button" title="변동이력검색">
                                            <span>변동이력검색</span><i aria-hidden="true" class="bi bi-arrow-right"></i>
                                        </button>
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template> 


<style lang="scss" scoped>
@use '/node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
.resultLayerPopup__resultText .text {color: #fff;}
.resultLayerPopup__innerWrap {width: 100%;max-width: 1294px;margin: 43px auto 0;padding-bottom:36px;}
.resultLayerPopup__resultText + .resultLayerPopup__detailSearchBox {margin-top:40px;}
.honorLoad__wrap + .resultLayerPopup__detailSearchBox {margin-top:20px;}
.resultLayerPopup__administration {margin-top:26px;color:#98a2be;font-size:17px;line-height: 1.65;text-align: center;}
.resultLayerPopup__administration + .resultLayerPopup__innerWrap {margin-top:29px;}
.resultLayerPopup__detailSearchBox {display: flex;justify-content: center;align-items: center;padding: 14px 0;border-radius: 20px;background: #0a1944;}
.resultLayerPopup__detailSearchBoxInner {display: flex;align-items: center;gap: 10px;min-width: 720px;}
.resultLayerPopup__form {border-color: #384e8b !important;background: #102355;}
.resultLayerPopup__form .p-dropdown-label {color: #fff !important;font-weight: normal;font-size: 15px;}
.resultLayerPopup__form.selectStype01 {width: 30%;max-width: 230px;}
.resultLayerPopup__form.selectStype02 {width: 60%;max-width: 440px;}
.resultLayerPopup__detailSearchButton {display: flex;justify-content: center;align-items: center;gap: 10px;width: 100px;height: 38px;border-radius: 10px;background-image: linear-gradient(to top, #2b6ae5, #5a5de8);color:#fff;font-size:16px;}
.resultLayerPopup__detailSearchButton i {width: auto;height: auto;color: #fff;font-size: 18px;}
.resultLayerPopup__detailSearchBoxTip {margin-left:30px;color: #98a2be;font-size: 14px;}
.resultLayerPopup__detailSearchBoxTip .bi {margin-right: 7px;}
.resultLayerPopup__filter {display: flex;align-items: center;margin-top: 18px;gap: 9px;}
.resultLayerPopup__radio {display: flex;align-items: center;gap: 5px;}
.resultLayerPopup__radio label {min-width: 56px;color: #b4bbd2;font-size: 14px;}
.resultLayerPopup__radio:nth-child(2) label {min-width: 70px;}
.resultLayerPopup__radio .p-radiobutton .p-radiobutton-box {border-color: #4e64a1;background: #0b1e50;}
.resultLayerPopup__filterTip {color: #98a2be;font-size: 14px;}
.resultLayerPopup__filterTip .bi {margin-right: 7px;}
.resultLayerPopup__scrollWrap {overflow-y: auto;max-height: 1600px;margin: 25px 0 0 0;}
.resultLayerPopup__scroll .p-scrollpanel-content {padding: 0 0 18px 0;}
.resultLayerPopup__list > li {position: relative;overflow: hidden;margin-top: 18px;border-radius: 20px;background: #fff;}
.resultLayerPopup__list > li:first-child {margin-top: 0;}
.resultLayerPopup__listDetail {position: relative;display: flex;align-items: flex-start;flex-wrap: wrap;width: 100%;gap:1px;/* max-width: 910px; */}
.resultLayerPopup__listDetail.more {display: none;background: #eff2fb;max-width: 100%;padding: 10px 0 10px 60px;}
.resultLayerPopup__listDetail.more .resultLayerPopup__listDetailTitle {background: #dee3f0;}
.resultLayerPopup__listDetail.more.moreActive {display: flex;height: auto;}
.resultLayerPopup__listDetail.basic {margin-left: 10px;}
.resultLayerPopup__listDetailTitle {display: flex;justify-content: center;align-items: center;width: 90px;height: 36px;margin-right: 13px;border-radius: 10px;background: #f0f0f0;color: #000;font-size: 14px;}
.resultLayerPopup__listDetailContent {display: flex;flex-direction: column;width: calc(100% - 170px);min-height: 40px;color: #111;font-size: 13px;}
.resultLayerPopup__listDetailContent.moContent {display: none;}
.resultLayerPopup__listDetailContent.pcContent {display: flex;}
.resultLayerPopup__listDetailContentGap {margin-top: 1px;}
.resultLayerPopup__innerBox {display: flex;align-items: center;min-height: 36px;color: #111;font-size: 17px;}
.resultLayerPopup__innerBox strong {font-size:19px;}
.resultLayerPopup__innerBox .detailAddr_btnWrap .commonButton__resultButton{margin-left: 10px;}
.resultLayerPopup__innerBox .detailAddr_btnWrap .commonButton__resultButton.long{min-width: 40px;}
.resultLayerPopup__copy {display: inline-block;margin-left: 9px;}
.resultLayerPopup__relatedAddress {margin-right: -245px;color: #555;font-size: 16px;}
.resultLayerPopup__relatedAddressTitle {display: inline-flex;align-items: center;justify-content: center;width: 90px;height: 30px;margin-right: 10px;border: 1px solid #ddd;border-radius: 20px;color: #555;font-size: 15px;vertical-align: -1px;}
.resultLayerPopup__detailAdressFunction {margin-top: 14px;}
.resultLayerPopup__functionPostalCodeWrap {display: flex;flex-direction: column;margin-right: 19px;min-width: 57px;justify-content: center;align-items: center;zoom:0.9;}
.resultLayerPopup__functionPostalCodeText {color: #555;font-size: 14px;}
.resultLayerPopup__functionPostalCodeNumber {margin-top: 5px;color: #111;font-size: 24px;font-weight: 500;letter-spacing:0;}
.resultLayerPopup__detailAdressButton {display: flex;align-items: center;height: 34px;padding: 0 14px;background: #e5eaf9;color: #11328e;font-size: 13px;gap: 12px;line-height: 34px;}
.resultLayerPopup__detailAdressButton i {width: auto;height: auto;color: #11328e;font-size: 13px;}
.resultLayerPopup__detailAdressButton.active i {transform: rotate(180deg);}
.resultLayerPopup__apt {position: relative;display: inline-flex;justify-content: center;align-items: center;width: 66px;height: 26px;margin: 20px 10px 0 0;border-radius: 13px;background: #ebf0fd;color: #3e67e7;font-size: 14px;font-weight: 500;zoom:0.9;}
.resultLayerPopup__apt.pcContent {display: inline-flex;}
.resultLayerPopup__apt::after {position: absolute;top: -24px;left: 21px;display: block;content: "";width: 24px;height: 24px;background: url("@images/common/ic-apart.png") no-repeat 50%/24px;}
.resultLayerPopup__detailAdress {display: none;max-width: 955px;margin: 12px 0 10px 158px;padding: 20px 20px 23px;border-radius: 10px;background: #f8f8f8;}
.resultLayerPopup__detailAdress.detailAdressActive {display: block;}
.resultLayerPopup__eastWestFloor {display: flex;width: 100%;gap: 10px;margin-bottom: 7px;}
.resultLayerPopup__eastWestFloor li {width: 33.3%;}
.resultLayerPopup__eastWestFloorSelect {width: 100%;height: 40px !important;}
.resultLayerPopup__eastWestFloorSelect .p-dropdown-label {padding: 0 20px 0 10px !important;line-height: 40px !important;font-size: 14px !important;font-weight: bold !important;}
.resultLayerPopup__eastWestFloorTip {margin-top: 5px;color: #666;font-size: 15px;}
.resultLayerPopup__tip {margin-top: 5px;padding-bottom:5px;}
.resultLayerPopup__tip li {color: #555;font-size: 14px;line-height: 1.75;}
.resultLayerPopup__communityCenter li {margin-top: 6px;color: #111;font-size: 16px;}
.resultLayerPopup__phone {display: inline-block;position: relative;padding-left: 26px;color: #555;font-size:15px;}
.resultLayerPopup__phone i {color: #777;font-size: 13px;}
.resultLayerPopup__phone::after {position: absolute;left: 13px;top: 3px;content: " ";display: block;width: 1px;height: 15px;background: #d5d5d5;}
.resultLayerPopup__detailBox {position: relative;display: flex;align-items: flex-start;justify-content: space-between;padding: 8px;min-height: 129px;}
.resultLayerPopup__detailBoxNumber {display: flex;align-items: center;justify-content: center;min-width: 36px;height: 36px;border-radius: 12px;border: 1px solid #f0f0f0;background: #fff;font-size: 18px;font-weight: bold;}
.resultLayerPopup__function {display: flex;align-items: center;justify-content: flex-end;gap: 10px;}
.resultLayerPopup__functionButton {display: flex;justify-content: center;width: 80px;height: 80px;padding-top: 52px;border-radius: 10px;border: 1px solid #f2f2f2;background-color: #f2f2f2;color: #333;font-size: 14px;zoom:0.9;}
.resultLayerPopup__functionButton.en {background-image: url("@images/common/ic-translate.png");background-repeat: no-repeat;background-position: 50% 14px;background-size: 35px 31px;}
.resultLayerPopup__functionButton.kr {background-image: url("@images/common/ic-translate-2.png");background-repeat: no-repeat;background-position: 50% 14px;background-size: 35px 31px;}
.resultLayerPopup__functionButton.load {background-image: url("@images/common/ic-newmenu-03-2.png");background-repeat: no-repeat;background-position: 50% 16px;background-size: 30px 28px;}
.resultLayerPopup__functionButton.map {background-image: url("@images/common/ic-newmenu-02-1.png");background-repeat: no-repeat;background-position: 50% 15px;background-size: 36px 30px;}
.resultLayerPopup__functionButton:focus, .resultLayerPopup__functionButton:hover, .resultLayerPopup__functionButton.active {border-color: #325ee6;background-color: #fff;}
.resultLayerPopup__moreFunction {position: relative;}
.resultLayerPopup__moreButton {position: absolute;top: -44px;right: 50px;display: flex;align-items: center;justify-content: center;width: 110px;height: 45px;padding-top: 1px;border-radius: 20px 20px 0 0;background: #111;color: #fff;font-size: 16px;gap: 4px;z-index: 1;zoom:0.9;}
.resultLayerPopup__moreButton i {width: auto;height: auto;font-size: 24px;}
.resultLayerPopup__moreButton:focus, .resultLayerPopup__moreButton:hover, .resultLayerPopup__moreButton.active {background-image: linear-gradient(to top, #2b6ae5, #5a5de8);}
.resultLayerPopup__abolition {min-width: 65px;margin-left: 12px;color: #de1c2a;}
.resultLayerPopup__abolition i {margin-right: 6px;}
.resultLayerPopup__unpublished {min-width:76px;margin-left: 12px;color: #000;}
.resultLayerPopup__unpublished i {margin-right: 6px;}
.resultLayerPopup__history {min-width: 65px;margin-left: 12px;color: #000;}
.resultLayerPopup__history i {margin-right: 6px;}
.resultLayerPopup__commonButton {display: inline-flex;align-items: center;height: 36px;padding: 0 14px;background: #e5eaf9;color: #11328e;font-size: 13px;gap: 7px;}
.resultLayerPopup__commonButton i {width: auto;height: auto;color: #11328e;font-size: 12px;}
.resultLayerPopup__commonButton.type01 {margin-left: 10px;}
.resultLayerPopup__enText {position: relative;margin-top: 10px;padding-left: 25px;color: #11328e;}
.resultLayerPopup__enText::after {content: " ";position: absolute;left: 0;top: -5px;width: 16px;height: 16px;border-left: 1px solid #9ea7c1;border-bottom: 1px solid #9ea7c1;}
.resultLayerPopup__postDetail {display:none;}
.resultLayerPopup__postDetail.active {display: block;}
.resultLayerPopup__notation {margin-top: 17px;padding: 10px 15px;border-radius: 10px;background: #fff;}
.resultLayerPopup__notation.active {display: block;}
.resultLayerPopup__notationTitle {color: #111;font-size: 16px;}
.resultLayerPopup__notationList {display: flex;flex-wrap: wrap;gap: 8px 0;margin-top: 13px;}
.resultLayerPopup__notationList dt {display: flex;align-items: center;justify-content: center;width: 64px;height: 28px;border: 1px solid #ddd;border-radius: 18px;background-color: #fff;}
.resultLayerPopup__notationList dd {display: flex;flex-direction: column;gap: 13px;width: calc(100% - 90px);padding: 5px 0 0 9px;}
.resultLayerPopup__notationListTitle {color: #111;font-size: 16px;}
.resultLayerPopup__notationListDetail {color: #555;font-size: 15px;}
.resultLayerPopup__notationListEn {color: #11328e;font-size: 15px;}
.eastWestFloor__select {width: 100%;height: 33px;border-radius: 13px;border: 1px solid #c0c4ca;padding: 0 8px;color: #000;font-size: 15px;appearance: none;background:#fff  url("@images/common/geo-chevron-down@2x2.png") no-repeat right 14px top 50% /14px;}

.resultLayerPopup__paging .p-paginator {background: none;}
.resultLayerPopup__paging .p-paginator .p-paginator-page {color: #8898c4;}
.resultLayerPopup__paging .p-paginator .p-paginator-first, .resultLayerPopup__paging .p-paginator .p-paginator-prev, .resultLayerPopup__paging .p-paginator .p-paginator-next, .resultLayerPopup__paging .p-paginator .p-paginator-last {background-color: #1d3679;color: #fff;}

@media (max-width: 1200px) {
	.resultLayerPopup__detailBoxNumber {display: none;}
	.resultLayerPopup__listDetail.basic {margin:0;}
	.resultLayerPopup__listDetail.more {padding-left:10px;}
	.resultLayerPopup__detailAdress {margin-left:127px;}
}

@media (max-width: 1165px) {
	.resultLayerPopup__detailBox .resultLayerPopup__listDetailTitle {display: none;}
	.resultLayerPopup__listDetailContent {width: 100%;}
	.resultLayerPopup__detailAdress {margin-left:10px;}
	.resultLayerPopup__listDetailContent.recordButtonWrap {margin:-38px 0 0 104px;}
}

@media (max-width: 920px) {
    .resultLayerPopup__filter {display: flex;align-items: flex-start;flex-wrap: wrap;margin-top: 25px;gap: 17px;width: 100%;}
	.honorLoad__wrap + .resultLayerPopup__detailSearchBox {margin-top:10px;}
}

@media (max-width: 900px) {
	.mainSearchBox__recentSearchesButtonMore {padding:0;}
    .mainSearchBoxBasic__quickMenu {min-width: 126px;border-radius: 10px;background-position: 50% 27px;}
    .mainSearchBoxBasic__quickMenu button {padding-top: 72px;}
    .mainSearchBoxBasic__quickText.mo {font-size:21px;}
    .resultLayerPopup {position: relative;margin: 0;padding: 18px 20px;border-radius: 10px;background: #112660;}
    .resultLayerPopup.resultActive {display: block;}
    .resultLayerPopup__close {right: 20px;top: 20px;}
    .resultLayerPopup__closeButton {width: 24px;height: 24px;}
    .resultLayerPopup__closeButton i {font-size:14px;}
    .resultLayerPopup__headerFunction {display: flex;align-items: center;gap: 10px;flex-wrap: wrap;}
    .resultLayerPopup__functionList {gap: 5px;}
    .resultLayerPopup__innerWrap {width: 100%;max-width: 1440px;margin: 30px auto 0;padding-bottom: 0px;}
    .resultLayerPopup__detailSearchBox {display: flex;justify-content: center;align-items: center;flex-direction: column;padding: 30px 0;border-radius: 10px;background: #0a1944;}
    .resultLayerPopup__form {border-color: #384e8b !important;background: #102355;}
    .resultLayerPopup__form .p-dropdown-label {color: #fff !important;font-weight: normal;font-size: 17px;}
    .resultLayerPopup__form.selectStype01 {width: 100%;max-width: 100%;}
    .resultLayerPopup__form.selectStype02 {width: 100%;max-width: 100%;}
    .resultLayerPopup__detailSearchBoxTip .bi {margin-right: 4px;}
    .resultLayerPopup__scrollWrap {max-height: 1600px;margin: 25px 0 0 0;}
    .resultLayerPopup__scroll .p-scrollpanel-content {padding: 0 0 18px 0;}
    .resultLayerPopup__unpublished {min-width:auto;}
    .resultLayerPopup__history {min-width:auto;}
    .resultLayerPopup__abolition {min-width:auto;margin-left:5px;}
    .resultLayerPopup__abolition i {margin-right:3px;}
    .resultLayerPopup__list > li {position: relative;overflow: hidden;min-height: initial;margin-top: 20px;border-radius: 5px;background: #fff;}
    .resultLayerPopup__list > li:first-child {margin-top: 0;}
    .resultLayerPopup__listDetail {position: relative;display: flex;align-items: flex-start;flex-wrap: wrap;width: 100%;}
    .resultLayerPopup__listDetail.basic {margin:0;}
    .resultLayerPopup__listDetail.basic .resultLayerPopup__listDetailTitle {display: none;}
    .resultLayerPopup__listDetail.basic .resultLayerPopup__listDetailContent {order: 2;}
    .resultLayerPopup__listDetail.basic .resultLayerPopup__listDetailContent.post {order: 1;}
    .resultLayerPopup__listDetail.more {padding: 5px 10px;display: none;max-width: 100%;background: #eff2fb;}
    .resultLayerPopup__listDetail.more .resultLayerPopup__listDetailTitle {background: #dee3f0;}
    .resultLayerPopup__listDetail.more.moreActive {display: flex;height: auto;}
    .resultLayerPopup__listDetailTitle:first-child {margin: 0;}
    .resultLayerPopup__listDetailContent {min-height: initial;}
    .resultLayerPopup__listDetailContent.moContent {display: flex;flex-direction: row;align-items: center;}
    .resultLayerPopup__listDetailContent .number {font-size:16px;font-weight: bold;}
    .resultLayerPopup__listDetailContent.pcContent .resultLayerPopup__abolition,
    .resultLayerPopup__listDetailContent.pcContent .resultLayerPopup__unpublished,
    .resultLayerPopup__listDetailContent.pcContent .resultLayerPopup__history {display: none;}
    .resultLayerPopup__detailBox {min-height: 100px;padding: 4px 8px;}
    .resultLayerPopup__innerBox {min-height: initial;margin-top:3px;}
    .resultLayerPopup__innerBox.type01 {padding-right:0;}
    .resultLayerPopup__copy {display:inline-block;margin-left: 9px;}
    .resultLayerPopup__copy.type01 {display:none;}
    .resultLayerPopup__relatedAddress {position: relative;margin: 4px 0 0;padding: 2px 40px 0 0;font-size: 14px;}
    .resultLayerPopup__detailAdressFunction {margin-top: 5px;}
    .resultLayerPopup__detailAdressButton i {width: auto;height: auto;color: #11328e;font-size: 11px;}
    .resultLayerPopup__detailAdress {display: none;max-width: 1058px;margin: 12px 0 0 40px;padding: 24px 24px 27px;border-radius: 10px;background: #f8f8f8;}
    .resultLayerPopup__detailAdress.detailAdressActive {display: block;margin: 0 10px 0 10px;}
    .resultLayerPopup__eastWestFloor {display: flex;width: 100%;gap: 10px;margin-bottom: 7px;}
    .resultLayerPopup__eastWestFloorSelect .p-dropdown-label {line-height: 34px !important;font-size: 14px !important;}
    .resultLayerPopup__eastWestFloorTip {margin-top: 7px;}
    .resultLayerPopup__tip {margin-top: 10px;}
    .resultLayerPopup__phone::after {display: none;}
    .resultLayerPopup__function {display: flex;align-items: center;justify-content: center;gap: 10px;position: absolute;right: 8px;top: 3px;z-index: 1;}
    .resultLayerPopup__functionButton {display: flex;align-items: center;justify-content: center;width: auto;height: auto;padding: 0;border: none;background: none !important;gap: 0;font-size:18px;}
    .resultLayerPopup__functionButton:focus, .resultLayerPopup__functionButton:hover, .resultLayerPopup__functionButton.active {text-decoration: underline;}
    .resultLayerPopup__functionButton + .resultLayerPopup__functionButton {position: relative;overflow: visible;}
    .resultLayerPopup__functionButton + .resultLayerPopup__functionButton::after {content: "";display: block;position: absolute;top: 4px;left: -5px;width: 1px;height: 16px;background: #e5e5e5;}
    .resultLayerPopup__en {height: 15px;padding-left: 27px;background: url("@images/common/img-translate.png") no-repeat 50% 1px/15px 11px;}
    .resultLayerPopup__detailBoxNumber, .resultLayerPopup__functionPostalCodeWrap {display: none;}
    .resultLayerPopup__apt {margin: 0 0 0 5px;border-radius: 8px;background: #ebf0fd;font-size: 14px;}
    .resultLayerPopup__english {display: inline-block;margin-left:10px;padding-left:18px;background: url("@images/common/icon1.png") no-repeat 0 4px/ 13px;color:#0076c7;font-size:16px;}
    .resultLayerPopup__copyButton {display: inline-block;margin-left:10px;padding-left:18px;background: url("@images/common/icon4.png") no-repeat 0 4px/ 13px;color:#0076c7;font-size:16px;}
    .resultLayerPopup__apt::after {display: none;}
    .resultLayerPopup__functionButton.pcContent {display: none;}
    .resultLayerPopup__moreButton {position: absolute;top: -30px;right: 18px;display: flex;align-items: center;justify-content: center;width: 30px;height: 30px;padding-top: 1px;border-radius: 10px 10px 0 0;background: #111;color: #fff;font-size: 0;gap: 0;z-index: 1;}
    .resultLayerPopup__moreButton i {width: auto;height: auto;font-size: 20px;}
    .resultLayerPopup__moreButton:focus, .resultLayerPopup__moreButton:hover, .resultLayerPopup__moreButton.active {background-image: linear-gradient(to top, #2b6ae5, #5a5de8);}
    .resultLayerPopup__commonButton.type01 {margin-left: 10px;min-width: 126px;padding: 0 10px 0 15px;}
    .resultLayerPopup__notation {margin-top: 17px;padding: 15px;border-radius: 10px;background: #fff;}
    .resultLayerPopup__notation.active {display: block;}
    .resultLayerPopup__notationTitle {color: #111;font-size: 12px;height: 500;}
    .resultLayerPopup__notationList {display: flex;flex-wrap: wrap;gap: 15px 0;margin-top: 15px;}
    .resultLayerPopup__notationList dt {display: flex;align-items: center;justify-content: center;width: 40px;height: 20px;border: 1px solid #ddd;border-radius: 10px;background-color: #fff;}
    .resultLayerPopup__notationList dd {display: flex;flex-direction: column;gap: 5px;width: calc(100% - 50px);padding: 2px 0 0 9px;}
    .resultLayerPopup__notationListTitle {color: #111;font-size: 14px;}
    .resultLayerPopup__notationListDetail {color: #555;font-size: 13px;}
    .resultLayerPopup__notationListEn {color: #11328e;font-size: 13px;}
    .resultLayerPopup__paging .p-paginator {background: none;}
    .resultLayerPopup__paging .p-paginator .p-paginator-page {color: #8898c4;}
    .resultLayerPopup__paging .p-paginator .p-paginator-first, .resultLayerPopup__paging .p-paginator .p-paginator-prev, .resultLayerPopup__paging .p-paginator .p-paginator-next, .resultLayerPopup__paging .p-paginator .p-paginator-last {background-color: #1d3679;color: #fff;}
    .resultLayerPopup__administration + .resultLayerPopup__innerWrap {margin-top:19px;}
    .resultLayerPopup__headerFunction {width: 100% !important;margin:10px 0 0 !important;}
}
</style>