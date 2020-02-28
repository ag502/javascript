## 1. 변수 할당으로 의도를 표현하라.

1. 블록 유효 범위 변수로 정보를 격리하라.
   ```javascript
   function addClick_3(items) {
     for (let i = 0; i < items.length; i++) {
       items[i].onClick = function() {
         return i;
       };
     }
     return items;
   }
   ```
2. 템플릿 리터럴로 변수를 읽을 수 있는 문자열로 변환하라.

   ```javascript
   function Hello(name) {
     return `Hi I'm ${name.toUpperCase()}`;
   }
   ```

   중괄호 내부는 문자열이나 정수를 반환하는 함수 사용 권장.
   대규모 변환이 필요한 경우 외부에서 함수 작성 후 할당.

   ***

## 2. 배열로 데이터 컬렉션을 관리하라.

1. 배열로 유연한 컬렉션을 생성하라.

2. Includes()로 존재여부를 확인하라.
