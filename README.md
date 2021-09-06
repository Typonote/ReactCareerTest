# 직업심리검사 서비스 구현

커리어넷에서 제공하는 직업심리검사 API를 이용하여 사용자의 직업 적합도를 테스트 할 수 있는 WEB SERVICE입니다.

## 💻 기술 스택

- HTML5
- CSS3 & SCSS
- JavaScript
- React
- Git

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

![Hnet com-image](https://user-images.githubusercontent.com/81430564/132158685-3056d9d6-3621-41b5-a3d4-692b91295715.gif)

## ⚙️ 주요 기능

- 그래프와 표를 활용해 데이터를 쉽게 확인할 수 있도록 구현
- 문항을 다 선택한 후 넘어가도록 버튼 효과 구현
- 문항 페이지를 넘길 때마다 진행도 확인 기능 구현

## ✨ 실행 방법

1. api key를 신청해주세요.
> API 폴더 안 OpenAPI.js에 넣어주세요!

2. 기본 설치
```
yarn install
```
3. 바로 시작 🚀
```
yarn start
```
