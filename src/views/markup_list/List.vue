<script setup>
	import { ref, onMounted, computed } from 'vue'

    
</script>

<template>
	<table class="markuplist">
  <colgroup>
  <col width="131"/>
  <col width="240"/>
  <col width="200"/>
  <col width="186"/>
  <col />
  <col />
  </colgroup>
  <thead>
    <tr>
      <th>1depth</th>
      <th>2depth</th>
      <th>3depth</th>
      <th>4depth</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr class="highlight">
      <td>메인</td>
      <td></td>
      <td></td>
      <td></td>
      <td><a href="/main">main</a></td>
      <td></td>
      <td>디자인</td>
    </tr>
    <tr>
      <td rowspan="14" colspan="1"><div>주소정보 정책소개</div></td>
      <td rowspan="10" colspan="1"><div>주소활용정책 소개</div></td>
      <td>목록</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="3" colspan="1"><div>사물주소</div></td>
      <td>사물주소 소개</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>사물주소 유형</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>사물주소 사용 예시</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td rowspan="3" colspan="1"><div>입체주소</div></td>
      <td>입체도로 소개</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>입체주소 부여방법</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>입체도로 도로명판의 종류</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td rowspan="2" colspan="1"><div>장소지능정보</div></td>
      <td>장소지능 출입구 정보 소개</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>출입구 정보 구축 예시</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>수상시설</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2" colspan="1"><div>주소정보 유통 프로세스 소개</div></td>
      <td>유통정보의 생애 주기와 절차</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>주소정보 DB 구축</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2" colspan="1"><div>주소정보통계</div></td>
      <td>주요 통계</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>활용 통계</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="9" colspan="1"><div>주소정보 체험하기</div></td>
      <td rowspan="3" colspan="1"><div>사용자 추천 서비스</div></td>
      <td rowspan="3" colspan="1"><div>사용자 추천</div></td>
      <td>사용목적 선택</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>세부 설정 선택</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>결과</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td rowspan="2" colspan="1"><div>도로명 주소 속성정보 체험하기</div></td>
      <td>소개</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>속성정보 체험하기</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2" colspan="1"><div>도로명 주소 공간정보 체험하기</div></td>
      <td>소개</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>체험하기</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2" colspan="1"><div>신규 주소정책 체험하기</div></td>
      <td>소개</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>체험하기</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="17" colspan="1"><div>주소정보 자료제공</div></td>
      <td rowspan="7" colspan="1"><div>주소정보 다운로드</div></td>
      <td rowspan="2" colspan="1"><div>목록</div></td>
      <td>큐레이션</td>
      <td><a href="/data_provision/AddressDownload">AddressDownload</a></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>상세 검색</td>
      <td><a href="/data_provision/AddressDownloadDetails">AddressDownloadDetails</a></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>상세</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>신청서 작성</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>제공하는 주소</td>
      <td>주소정보 다운로드</td>
      <td><a href="/data_provision/AddressProvided">AddressProvided</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>데이터 구성</td>
      <td>탭</td>
      <td></td>
      <td>주소정보 다운로드 페이지에 탭</td>
    </tr>
    <tr>
      <td></td>
      <td>스키마 구성</td>
      <td>탭</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="4" colspan="1"><div>주소정보 데이터 연계</div></td>
      <td>도로명주소 데이터 연계 절차</td>
      <td></td>
      <td><a href="/data_provision/AddressLinkage">AddressLinkage</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <div>도로명주소 데이터 연계 활용 예제</div>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2" colspan="1"><div>연계 신청</div></td>
      <td>약관동의</td>
      <td><a href="/data_provision/LinkageTerms">LinkageTerms</a></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>신청서 작성</td>
      <td><a href="/data_provision/ApplicationFormWrite">ApplicationFormWrite</a></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td rowspan="3" colspan="1"><div>주소정보 API 연계</div></td>
      <td>API 목록</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>API 상세</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>API 신청하기</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="3" colspan="1"><div>주소정보 솔루션 제공</div></td>
      <td>주소검색솔루션 소개</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>주소검색솔루션 다운로드</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>주소검색솔루션 팝업서비스</td>
      <td></td>
      <td></td>
      <td></td>

      <td></td>
    </tr>
    <tr>
      <td rowspan="15" colspan="1"><div>주소정보 소통창구</div></td>
      <td rowspan="6" colspan="1"><div>주소정보 개발자 소통창구</div></td>
      <td rowspan="3" colspan="1"><div>Tech&amp;Tips</div></td>
      <td>목록</td>
      <td><a href="/communication/TechTipsList">TechTipsList</a></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>상세</td>
      <td><a href="/communication/TechTipsDetails">TechTipsDetails</a></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>작성</td>
      <td><a href="/communication/TechTipsWrite">TechTipsWrite</a></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td rowspan="3" colspan="1"><div>토론</div></td>
      <td>목록</td>
      <td></td>
      <td>&nbsp;</td>
      <td>Tech&amp;Tips 동일 탭형식</td>
    </tr>
    <tr>
      <td>상세</td>
      <td>-</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>작성</td>
      <td>-</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td rowspan="3" colspan="1"><div>주소정보 문의하기</div></td>
      <td>목록</td>
      <td></td>
      <td><a href="/communication/InquiryList">InquiryList</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>상세</td>
      <td></td>
      <td><a href="/communication/InquiryDetails">InquiryDetails</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>작성</td>
      <td></td>
      <td><a href="/communication/InquiryWrite">InquiryWrite</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2" colspan="1"><div>주소정보 공지사항</div></td>
      <td>목록</td>
      <td></td>
      <td><a href="/communication/NoticeList">NoticeList</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>상세</td>
      <td></td>
      <td><a href="/communication/NoticeDetails">NoticeDetails</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="highlight">
      <td rowspan="4" colspan="1"><div>행정구역 코드 변경안내</div></td>
      <td>전북특별자치도</td>
      <td></td>
      <td></td>
      <td></td>
      <td>디자인 나와야함</td>
    </tr>
    <tr class="highlight">
      <td>부천시</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="highlight">
      <td>강원특별자치도</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="highlight">
      <td>군위군</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2" colspan="1"><div>로그인</div></td>
      <td></td>
      <td>휴대폰 인증</td>
      <td></td>
      <td><a href="/layer">layer</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="highlight">
      <td></td>
      <td>소셜 인증</td>
      <td></td>
      <td></td>
      <td></td>
      <td>레이어팝업 휴대폰인증과 동일</td>
    </tr>
    <tr>
      <td rowspan="14" colspan="1"><div>마이페이지</div></td>
      <td rowspan="2" colspan="1"><div>장바구니</div></td>
      <td>장바구니</td>
      <td></td>
      <td><a href="/mypage/ShoppingCart">ShoppingCart</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>신청서 작성</td>
      <td></td>
      <td><a href="/mypage/ApplicationFormWrite">ApplicationFormWrite</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>나의 즐겨찾기</td>
      <td></td>
      <td></td>
      <td><a href="/mypage/Favorites">Favorites</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>다운로드 신청내역</td>
      <td></td>
      <td></td>
      <td><a href="/mypage/ApplicationHistory">ApplicationHistory</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="3" colspan="1"><div>연계신청내역</div></td>
      <td>목록</td>
      <td></td>
      <td><a href="/mypage/ConnectionsList">ConnectionsList</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>상세</td>
      <td></td>
      <td><a href="/mypage/ConnectionsDetails">ConnectionsDetails</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>수정</td>
      <td></td>
      <td><a href="/mypage/ConnectionsModify">ConnectionsModify</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="3" colspan="1"><div>API 인증키 관리</div></td>
      <td>목록</td>
      <td></td>
      <td><a href="/mypage/ApiList">ApiList</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>상세</td>
      <td>Details</td>
      <td><a href="/mypage/ApiDetails">ApiDetails</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>수정</td>
      <td>Modify</td>
      <td><a href="/mypage/ApiModify">ApiModify</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="4" colspan="1"><div>나의 문의글</div></td>
      <td>목록</td>
      <td></td>
      <td><a href="/mypage/InquiryList">InquiryList</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>상세</td>
      <td></td>
      <td><a href="/mypage/InquiryDetails">InquiryDetails</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>상세</td>
      <td>대기</td>
      <td><a href="/mypage/InquiryDetailsWaiting">InquiryDetailsWaiting</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>수정</td>
      <td></td>
      <td><a href="/mypage/InquiryModify">InquiryModify</a></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>


</template>

<style lang="scss" scoped>
.markuplist {
  width:100%;
  thead {
    th {
      padding:5px;
      border:1px solid #808080;
      background-color: #a4a4a4;
    }
  }
  tbody {
    td {
      padding:5px;
      border:1px solid #808080;      
    }
    tr.highlight {
      td {
        background-color: #fdecec;
      }
    }
  }
}
</style>