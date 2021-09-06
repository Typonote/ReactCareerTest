# 직업심리검사 서비스 구현

커리어넷에서 제공하는 직업심리검사 API를 이용하여 사용자의 직업 적합도를 테스트 할 수 있는 WEB SERVICE입니다.

## 💻 기술 스택

- HTML5
- CSS3 & SCSS
- JavaScript
- React
- Git
- redux
- axios

## 🌲 디렉토리 구조

```
src
├── api
│   └── OpenAPI.js
│ 
├── assets
│   └── background.jpg
│ 
├── component
│   ├── DisplayAbility.js
│   ├── GenderChoice.js
│   ├── MyProgressBar.js
│   ├── NowDate.js
│   ├── QuestionCard.js
│   ├── ResultCard.js
│   ├── ResultGraph.js
│   ├── ResultLevelCard.js
│   └── ResultMajorCard.js
│ 
├── pages
│   ├── Complete.js
│   ├── Example.js
│   ├── Home.js
│   ├── Play.js
│   ├── Result.js
│   └── SetPage.js
│ 
├── redux
│   ├── action.js
│   ├── reducer.js
│   └── store.js
│ 
├── styles
│   ├── components
│   │            ├── _displayability.scss
│   │            ├── _genderchoice.scss
│   │            ├── _myprogressbar.scss
│   │            ├── _questioncard.scss
│   │            ├── _resultcard.scss
│   │            ├── _resultgraph.scss
│   │            ├── _resultlevelcard.scss
│   │            └── _resultmajorcard.scss
│   ├── pages
│   │            ├── _complete.scss
│   │            ├── _exmaple.scss
│   │            ├── _home.scss
│   │            ├── _play.scss
│   │            └── _result.scss
│   └── styles.scss
│ 
├── App.css
├── App.js
├── index.css
└── index.js
``` 

## 📄 서비스 예시

![Hnet-image](https://user-images.githubusercontent.com/81430564/132160450-ccda181b-d85e-45a2-9ae2-0c8dbc4515bb.gif)

## ⚙️ 주요 기능

- 그래프와 표를 활용해 데이터를 쉽게 확인할 수 있도록 구현
- 문항을 다 선택한 후 넘어가도록 버튼 효과 구현 (react-toastify 구현)
- 문항 페이지를 넘길 때마다 진행도 확인 기능 구현
- "다시 검사하기" 버튼 클릭 시, 진행했던 항목에 대한 기록 모두 초기화.
- 가치관과 관련이 높은 직업을 결과에 따라 분류하여 표기
- 페이지 당 5개의 문항 출력

## ✨ 실행 방법

1. api key를 신청해주세요.<br>
[커리어넷](https://www.career.go.kr/cnet/front/openapi/openApiTestCenter.do) 
> 받은 API키를 API 폴더 안 OpenAPI.js에 넣어주세요!

2. 기본 설치
```
yarn install
yarn add helmet
yarn add react-toastify
yarn add react-router-dom
yarn add axios
```
3. 바로 시작 🚀
```
yarn start
```
