import{_ as l,an as d,o as c,c as i,a as s,F as p,h,t as o,d as u}from"./index-ea1fe16d.js";const m={class:"tips"},g={class:"tips__grid",role:"list"},v=["aria-label"],f={class:"tips--card__cover"},b=["src","alt"],j={class:"tips--card__body"},k={class:"tips--card__title"},y={class:"tips--card__desc"},I={class:"tips--card__cta"},T=["onClick"],x={__name:"DataTechSection",setup(S){const n=d(),r=[{id:"guide-space",cover:"/src/assets/images/main/tech-thum01.png",title:`도로명주소 공간데이터
 활용가이드`,desc:`도로명주소 공간데이터를 다운로드하여 GIS도구에서
 가져오는 방법, 심볼 및 라벨의 설정, 데이터 조회 및
 추출 등 다수의 예제 제공`,to:"/tech/guide-space"},{id:"proj4",cover:"/src/assets/images/main/tech-thum02.png",title:`proj4j를 활용한
 경위도 좌표전환 방법`,desc:`정확한 위치 기반 서비스를 위해 Proj4j 라이브러리를
활용한 경위도, 평면좌표 변환 방법을 안내합니다.`,to:"/tech/proj4-transform"},{id:"search-api-ui",cover:"/src/assets/images/main/tech-thum03.png",title:`도로명주소 검색API를 활용하여
 팝업API 디자인 적용 샘플`,desc:`도로명주소 검색 API에 사용자 친화적인 팝업 UI를
적용한 샘플입니다. 간편한 주소 검색과 입력을
한 번에 구현해보세요.`,to:"/tech/search-api-ui"}],_=a=>n.push(a);return(a,e)=>(c(),i("section",m,[e[1]||(e[1]=s("div",{class:"tips__head"},[s("h3",{class:"tips__title"},"Tech&Tips"),s("p",{class:"tips__desc"},"주소기반정보를 활용한 다양한 서비스 사례를 소개합니다.")],-1)),s("ul",g,[(c(),i(p,null,h(r,t=>s("li",{key:t.id,class:"tips--card"},[s("article",{class:"tips--card__inner",role:"group","aria-label":t.title},[s("div",f,[s("img",{src:t.cover,alt:`${t.title} 표지`},null,8,b)]),s("div",j,[s("h4",k,o(t.title),1),s("p",y,o(t.desc),1),s("div",I,[s("button",{type:"button",class:"btn-link",onClick:D=>_(t.to)},[...e[0]||(e[0]=[u(" 자세히 보기 ",-1),s("span",{class:"arr","aria-hidden":"true"},"→",-1)])],8,T)])])],8,v)])),64))])]))}},A=l(x,[["__scopeId","data-v-81200af4"]]);export{A as default};
