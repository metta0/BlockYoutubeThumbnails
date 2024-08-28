# HTML, CSS, JS


## [HTML]

### <div> 태그
역할: <div> 태그는 문서의 구획을 나누기 위해 사용되는 블록 레벨 요소입니다. 
<div>는 주로 페이지 레이아웃을 구성하거나 스타일링을 적용하기 위해 사용됩니다. 
기본적으로는 아무 스타일도 적용되지 않으며, 다른 요소를 그룹화하고 구조화하는 데 유용합니다.

### <a> 태그
역할: <a> 태그는 앵커 태그로도 알려져 있으며, 주로 하이퍼링크를 생성하는 데 사용

### <yt-image>
사용자 정의 태그
<yt-image>는 일반적인 HTML 요소가 아니라, 웹 컴포넌트나 JavaScript 프레임워크에서 정의한 사용자 
정의 태그일 가능성이 큽니다. 웹 컴포넌트는 HTML 요소의 기능을 확장하거나 새로운 요소를 정의할 수 
있게 해주는 기술입니다.

<yt-image alt="" ftl-eligible="" notify-on-loaded="" notify-on-unloaded="" class="style-scope ytd-thumbnail">

속성: alt, ftl-eligible, notify-on-loaded, notify-on-unloaded, class 등은 
이 요소에 대한 추가 정보를 제공하거나 기능을 제어합니다.

### <class>
class="yt-core-image yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded" 


## [CSS]

'#'은 id, '.'은 클래스, ''


### [JS]

querySelector 함수로 태그 하위의 태그를 찾는다. 하위 태그의 속성이나 id 값으로 찾기가능.(html이든,CSS든!)
parentElement.querySelector('#text');

```
<style data-thumbnail-style="true">
  ytd-thumbnail, #playlist-thumbnails, yt-img-shadow {
    display: none !important;
  }
</style>
```
document.querySelector('style[data-thumbnail-style="true"]'); 스타일 속성을 가지고 검색.

```
setInterval(() => {
```
setInterval 함수는 주어진 콜백 함수를 일정한 간격(밀리초 단위)으로 반복 실행합니다.

