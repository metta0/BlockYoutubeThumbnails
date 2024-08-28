# 🫷Block youtube thumbnails 
저는 유튜브를 자주 사용하는데, 유튜브 썸네일이 주의력을 자꾸 빼앗아갑니다. 

원하는 영상을 검색해서 보더라도, 추천영상이나 관련영상들의 썸네일이 시선을 빼앗아가서 결국 시간을 낭비하게 됩니다.

개발 후 이 기능을 사용하면서 시각적 이미지가 글자와 비교해서 얼마나 자극적인지 더욱 체감하게 되었습니다.

그리고 조사해본 결과

[hideytthumbnails-extension](https://github.com/domdomegg/hideytthumbnails-extension)

: 이미 크롬 확장기능으로 썸네일을 가리는 프로그램이 존재했습니다. 
하지만, 제 요구에 맞게 필요한 기능들인
```
1) 특정 검색어나 채널에 한해서는 썸네일을 가리지 않는 기능
2) 확장기능 popup에서 옵션(썸네일을 블락 여부, 선택어 입력 등)을 선택하는 기능
```

들이 없기 때문에, 이 기능들을 추가하여 개발하였습니다.

#
# 0. Preview
 ### 1. Display Mode: Hidden 처리시
: 썸네일 사라짐.

![image](images\image.png)

 ### 2. Display Mode: Hidden 후, 제외 검색어 "명상" 입력.
: 제목에 "명상"포함된 영상의 썸네일은 보여짐.
![image](images\image-2.png)

#
# 1. Install

### prerequisite
> Chrome browser

#### A. 자동설치(확장프로그램)
```

```
#### B. 수동설치
```
저장소 복제
chrome://extensions로 이동
우측 상단 개발자모드 ON
좌측 상단 "압축해제된 확장 프로그램을 로드합니다"클릭 후 복제한 폴더 업로드
```
#
# 2. 오버뷰/ 스택

![image](https://velog.velcdn.com/images%2Fminchoi%2Fpost%2F5a6dc3c7-ff5a-46d3-ab72-c093f607bbc0%2F%ED%81%AC%EB%A1%AC%ED%99%95%EC%9E%A51.jpg)
[출처:velog.io/@minchoi/크롬-확장-프로그램-분석기-biauhudi]

기본 웹과 크롬 API를 사용하여 개발.

- HTML,CSS,JavaScript
- chrome API (chrome.storage)

#
# 3.git commit 메시지 규약
> * ➕ FEAT: 새로운 기능 추가
> * ❗ FIX: 버그 수정
> * 📝 DOCS: 문서 수정
> * 🎨 STYLE: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)
> * ⬆️ REFACTOR: 코드 리팩토링
> * 🔎 TEST: 테스트 코드 추가
> * ⚙ CHORE: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)

제목을 넘어, 본문 작성 필요시 '어떻게' 변경했는지 보다 '무엇을, 왜' 변경했는지 작성한다.
#
# 4. 이슈 및 해결

### 4-1.


### 4-2. 


## 5. TODO

### 5-1. 기능
+ [ ] 예외 검색어 다중 입력 기능
+ [ ] "구독" 페이지에서 예외검색어 기능
+ [ ] "쇼츠" 페이지에서 예외검색어 기능

### 5-2. 리팩토링
+ [ ] showSpecificThumbnail()에서 채널이름, 검색어 기능 각각 분류
+ [ ] 유튜브 페이지별 예외검색어 기능이 다르게 적용 필요. 확장성 고려한 변경.
+ [ ]
+ [ ]
+ [ ]