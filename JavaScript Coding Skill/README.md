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

## 3. 특수한 컬렉션을 이용해 코드 명료성을 극대화 하라.

1.  객체를 이용해 정적인 키-값을 탐색하라.
    변경이 없는 값을 객체로 선언

2.  Object.assign()로 조작없이 객체를 생성하라.

    ```javascript
    const object = {
      name: {
        first: '',
        last: ''
      }
      years: 20
    }
    ```

    얕은복사

    ```javascript
    Object.assign({}, object);
    ```

    단순 값만 복사, 내부에 참조값이 있을경우 참조값만 복사.
    원본을 변경시 얕게 복사된 객체도 변경

    깊은 복사

    ```javascript
    Object.assign({}, object, {
      name: Object.assign({}, object.name)
    });
    ```

3.  객체 펼침 연산자로 정보를 갱신 하라.

4.  맵으로 명확하게 키-값 데이터를 갱신하라.

    ```javascript
    const filters = new Map().set([key], [value]).set([key], [value]);
    filters.get([key]);
    filters.clear();
    ```

5.  맵과 펼침 연산자로 키-값 데이터를 순회하라.

6.  맵 생성시 부수효과를 피해라.

    ```javascript
    function applyMapCopy(map, defaults) {
      return new Map([...defaults, ...map]);
    }
    ```

7.  세트를 이용해 고유값을 관리하라.
