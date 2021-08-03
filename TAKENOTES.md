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
