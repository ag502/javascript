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
