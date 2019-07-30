# JavaScript-Study

JavaScript TIL

## 2019-07-25

1. 변수와 상수

   - 변수 <br>
     var로 선언, 한줄에 여러 변수 선언가능 <br>
     값이 할당된 후에 재 지정 가능 <br>
   - 상수 <br>
     const로 선언, 선언과 동시에 값을 지정해 주어야 함<br>
     한번 값이 지정되면 재지정 불가능
   - 작명 규칙 <br>
     - 의미 있는 것들로 지정
     - 추상적인 이름 지양
     - camelCase로 지정

2. 자료형

   - typeof<br>
     자료형의 종류를 알고 싶을때 사용
   - 숫자형

     - 연산가능
     - 다른 언어와 달리 정수와 실수를 구분하지 않고 모두 'number'로 지정
     - Syntactic Suger <br>

       ```javascript
       x = x + 1;
       x += 1;

       x = x * 2;
       x *= 2;

       x = x - 3;
       x -= 3;

       x = x / 2;
       x /= 2;

       x = x % 7;
       x %= 7;
       ```

       ```javascript
       x = x + 1;
       x++;

       x = x - 1;
       x--;
       ```

   - 문자형

     - "", '' 로 문자열을 둘러쌈 <br>
     - 문자열끼리 덧셈 연산 가능

   - 논리형

     - 대소 비교
     - &&, ||, !
     - ==, ===
       - ==<br>
         값만 같으면 true 반환
     - === <br>
       값 뿐만 아니라 자료형도 같아야 true반환

   - 형변환

     - number --> string <br>
       Number(string)
     - string --> number <br>
       String(number)

   - 배열

     - Array변수명 = [...]
     - Java, C와 달리 하나의 배열에 다양한 변수로 구성가능
     - 배열의 자료형은 'object'
     - 이차원 배열
     - 배열 VS 문자형

       - 공통점 <br>
         indexing 가능 <br>
         길이를 받아올 수 있음(.length)
       - 차이점 <br>
         자료형이 다름(string, object) <br>
         mutable, immutable <br>
         배열은 바뀔수 있지만(mutable), 문자열은 바뀔수 없다.(immutable)

         ```javascript
         var text1 = ["a", "b", "c", "d"];
         text1[0] = "b";
         console.log(text1);
         // ['b', 'b', 'c', 'd']

         var text2 = "hello";
         text2[0] = "b";
         console.log(text2);
         // hello
         ```

   - 객체
     - {key: value, key: value....} 로 선언
     - object 데이터 타입
     - 변수명[key] or 변수명.key로 요소 호출

3. 코드의 흐름

   - 함수 <br>
     - function 함수명(파라미터)로 선언
     - 내장함수
       - Number(), String()
       - ParseInt() <br>
         문자와 숫자가 섞여 있을 때, 정수인 부분만 꺼내 형변환(단 숫자부분이 먼저 나와야 함 ex. "100세")
       - ParseFloat() <br>
       - alert() <br>
         사용자에게 메세지를 띄워줌
       - prompt() <br>
         사용자에게 메세지를 띄우고, 문자열을 입력받음
       - confirm() <br>
         사용자에게 메세지를 띄우고, 확인과 취소를 누르게함
   - if 문
   - switch문
   - For문
     - for of <br>
       for (value of array) {}
     - for in <br>
       for (index in array) {} <br>
       array의 index를 반환
   - while문

---

## 2019-07-26

1. JavaScript로 HTML 다루기
   - getElementbyId(태그 아이디) <br>
     해당 아이디를 가지고 있는 태그를 참조
   - jQuery <br>
     - \$(태그 아이디).attr('바꿀 태그의 속성', '바꿀값');
     - \$(태그 아이디).css('바꿀 CSS의 속성', '바꿀값');
     - 이벤트, 이벤트 핸들링
       - 처리방법
         - HTML 태그에 직접 지정 <br>
           ```HTML
           <img src="images/..." onclick = "EventHandler()"/>
           ```
         - javascript에 지정
           - jQuery
             ```javascript
             $("#아이디").on("click", EventHandler);
             ```
           - javascript
             ```javascript
             document
               .getElementbyId("아이디")
               .addEventListener("click", EventHandler);
             ```

---

## 2019-07-27

1.  JavaScript Package
    - Math
      - abs(절댓값)
      - pow
      - sqrt(제곱근)
      - max
      - min
      - random
      - round
      - floor
      - ceil
    - String
      - length
      - charAt
      - indexOf(searchValue)
      - lastindexOf(searchValue)
      - toUpperCase()
      - toLowerCase()
      - substring(indexStart, indexEnd)
      - substr(start, length)
      - trim()
    - Array
      - length()
      - indexOf()
      - lastindexOf()
      - push()
      - pop()
      - join()
    - Date
      - new Date로 객체 생성
      - getTime()
      - getFullYear()
        ....

---

## 2019-07-28

1. Audio

   - new Audio(url or 파일 경로)
   - play(), pause()으로 재생 제어
   - currentTime으로 정지 후 재생 지점 지정

2. Boolean

   - 숫자
     - 0 : false
     - 양수 : true
     - 음수 : true
   - 문자열
     - 빈 문자열 : false
     - 비어있지 않은 문자열 : true
   - 그 외
     - null : false
     - undefined : false
     - NaN : false
   - 활용예시

     ```javascript
     var str = "Hello";
     console.log(!str); //false
     console.log(!!str); //true
     ```

---

## 2019-07-29

1. DOM

   - 문서 객체 모델 (Document Object Model) <br>
     브라우저가 html문서를 tree형태로 인식
   - javascript로 html의 태그를 변화 시키고 싶을 때<br>
     html의 dom에 접근해 변화

2. jQuery

   - 동작원리

     - \$('선택자'). 동작
       - 동작
         - 클래스 관련
           ```javascript
           $("#id").addClass("newClass");
           $("#id").removeClass("newClass");
           $("#id").toggleClass("newClass");
           $("#id").hasClass("newClass");
           ```
         - 속성관련
           ```javascript
           $("img").attr("src");
           $("img").attr("src", "images/..");
           $("p").text();
           $("h1").text("Hello");
           $("h1").html("<i>Good</i>");
           ```
         - 스타일관련
           ```javascript
           $("#id").css("background-color", "#ffffff");
           $("#id").css("background-color");
           ```

   - jQuery의 선택자는 CSS에서 사용하던 선택자를 그대로 사용가능

---

## 2019-07-30

1. jQuery
   - 요소 추가
     - 형제 요소 추가 <br>
       - \$('선택자').after('추가할 요소')
       - \$('선택자').before('추가할 요소')
     - 자식요소 추가 <br>
       - \$('선택자').append('추가할 요소')
       - \$('선택자').prepend('추가할 요소')

---

## 2019-07-31

1. jQuery
   - 요소 이동, 삭제
     - \$('선택자').after(\$('선택자'))
     - \$('선택자').before(\$('선택자'))
     - \$('선택자').append(\$('선택자'))
     - \$('선택자').prepend(\$('선택자'))
     - \$('선택자').remove()
