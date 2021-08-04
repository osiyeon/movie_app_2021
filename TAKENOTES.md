-   <App /> -> component : HTML 반환하는 함수
-   javascript와 html의 조합 - jsx

-   react application은 하나의 component만 rendering 할 수 있음
-   react는 component를 가져와서 browser가 이해할 수 있는 일반 HTML로 만듬

-   jsx는 component에 정보를 보낼 수 있음
-   react가 멋진 이유 -> 재사용 가능한 component를 만들 수 있음. (component를 계속해서 반복 사용 가능)

-   이 application에서 food component로 정보 보내고 food component에서 그 정보 어떻게 사용하지에 대해서 배우자
-   jsx도 기본적으로 속성과 value 적어주는 방식 사용
-   <Food name="kimchi" /> Food 컴포넌트에 props fav으로 value 전달 방법
-   father component에서 children component로 많은 props 보낼 수 있음

-   map: function 취해서 그 function을 array의 각 item에 적용하고 각 연산의 결과로 array를 만듬

*   Warning: Each child in a list should have a unique "key" props -> react의 모든 element는 unique 해야함. element들을 list에 집어넣으면 유일성이 없어짐 -> item들에 id를 부여해줘야함
*   Warning: img elements must have an alt prop, either with meaningful text, or an empty string for decorative images jsx-a11y/alt-text
    -> code style에 대해 도와줌

-   npm i prop-types
    -> 전달받은 props가 원하는 props인지 확인해줌
    -> array인지, boolean인지, t/f인지, object인지, 있는지 없는지 등 체크 가능
-   propTypes으로만 정의할 수 있음

-   dynamic data에 필요한건 state임

-   react는 render function을 refresh하지 않음
-   state는 object임. setState로 state값 바꿔줌 ** 매 순간 setState가 호출될 때마다 react는 새로운 state와 함께 render function을 호출할 것임 **
-   react는 virtual DOM 가지고 있기 때문에 변화된것만 반영해줌
-   this.state.count + 1 -> 이렇게 사용하는건 nice하지 않음 대신에 current 사용

-   mounting: 태어나는 것이랑 같음.
    -   constructor(): 먼저 호출되는 function - 자바스크립트에서 class 호출할 때 실행되는 것에서 가져옴
    -   constructor() 호출된 후에 render() 호출됨 그 이후 componentDidMount() 호출
-   updating -> state 변경할 때 발생(setState). 우리가 업데이트함.-> component 호출 -> render() -> componentDidUpdate()
-   unmounting: component가 죽는 것 의미 - componentWillUnmount()

-   axios는 마치 fetch위에 있는 작은 layer
-   npm install axios

-   YTS proxy 사용

-   npm i gh-pages
    -> 웹사이트를 github의 githuv page 도메인에 나타나게 함
    github에서 project 가져오는 방식
    https://osiyeon.github.com/movie_app_2021 주소창에 입력
    package.json에서 홈페이지 설정

    scripts에 deploy와 predeploy 추가
    deploy는 기본적으로 predeploy를 먼저 동작시킴

-   exact={true} : path="/"인 경우 url이 오직 '/'일 때만 rendering해줌
