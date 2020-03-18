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

3. 펼침 연산자로 배열을 본떠라.

```javascript
function removeItmeSpread(items, removable) {
  const index = items.indexOf(removable);
  return [...items.slice(0, index), ...items.slice(index + 1)];
}
```

4. push() 메서드 대신 펼침 연산자로 원본 변경을 피하라.

5. 펼침 연산자로 정렬에 의한 혼란을 피하라.

   `sort()`는 원본배열을 조작하기 때문에 복사후 정렬
