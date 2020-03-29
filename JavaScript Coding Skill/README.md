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

## 4. 조건문을 깔끔하게 작성하라.

1. 거짓 값이 있는 조건문을 축약하라.

2. 삼항 연산자로 빠르게 데이터를 확인하라.

3. 단락 평가를 이용해 효율성을 극대화 하라.

## 5. 반복문을 단순하게 만들어라.

1. 화살표 함수로 반복문을 단순하게 만들어라.

2. 배열 메서드로 반복문을 짧게 작성하라.

3. map() 메서드로 비슷한 길이의 배열을 생성하라.

   ```javascript
   const temp = array.map((cur, idx, arr) => console.log(cur));
   ```

4. filter()와 find()로 데이터의 부분집합을 생성하라.

   ```javascript
   const temp = array.filter((cur, idx, arr) => true);
   const temp = array.find((cur, idx, arr) => true);
   ```

5. forEach()로 동일한 동작을 적용하라.

6. 체이닝으로 메서드를 연결하라.

   ```javascript
   temp
     .filter(cur => true)
     .map(cur => cur)
     .forEach(cur => console.log(cur));
   ```

7. reduce()로 배열 데이터를 변환하라.

   ```javascript
   const aggregated = temp.reduce((obj, cur) => {
     const counter = obj[cur.language] || 0;
     return {
       ...obj,
       [cur.language]: counter + 1
     };
   }, {});
   ```

8. for...in 문과 for..of문으로 반복문을 정리하라.

   ```javascript
   for (const temp of iterator) {
     // iterator 순회
   }

   for (const key in object) {
     // object key 순회
   }
   ```

## 6. 매개변수와 return 문을 정리하라.

1. 매개변수 기본값을 생성하라.

2. 해체 할당으로 객체 속성에 접근하라.

   ```javascript
   const {
     title = "Anonymous",
     loaction: [logitude, latitude],
     test: { a, b },
     src: url
   } = object;
   ```

3. 키-값 할당을 단순화 하라.

4. 나머지 매개변수로 여러 개의 인수를 변수로 전달하라.

   ```javascript
   function args() {
     const arr = Array.prototype.slice.call(argument, 1);
     console.log(arguments);
   }

   function args(...args) {
     console.log(args);
   }
   ```

## 7. 유연한 함수를 만들어라.

1. 화살표 함수로 복잡도를 낮춰라.

   ```javascript
   const func = args => `${args}`;

   const func = ({ a, b }) => `${a}${b}`;

   const func = ({ a, b }) => ({ a: "1", b: "2" });
   ```

2. 부분 적용 함수로 단일 책임 매개변수를 관리하라.

   ```javascript
   const zip = (...cities) => {
     return (...birds) => {
       return cities.map((city, index) => [city, birds[index]]);
     };
   };

   const zip = (...cities) => (...birds) => {
     return cities.map((city, index) => [city, birds[indes]]);
   };
   ```

3. 커링과 배열 메서드를 조합한 부분 적용 함수를 사용하라.

   ```javascript
   const identity = field => {
     return value => {
       return dog => dog[field] === value;
     };
   };

   const identity = field => value => dog => dog[field] === value;

   const getDogNames = (dogs, filterFunc) => {
     return dogs.filter(filterFunc).map(dog => dog["이름"]);
   };

   const colorCheck = identity("색상");
   const stateCheck = identity("지역");

   getDogNames(dogs, colorCheck("갈색"));
   getDogNames(dogs, stateCheck("캔자스"));

   const allFilters = (dogs, ...checks) => {
     return dogs.filter(dog => checks.every(check => check(dog)));
   };

   allFilters(dog, colorCheck("갈색"), stateCheck("캔자스"));
   ```

4. 화살표 함수로 문맥 혼동을 피하라.

## 8. 클래스로 인터페이스를 간결하게 유지하라.

1.  알기 쉬운 클래스를 만들어라.

    ```javascript
    function Coupon(price, expiration) {
      this.price = price;
      this.expiration = expiration;
    }

    Coupon.prototype.getPriceText = function() {
      return this.price;
    };

    Coupon.prototype.getExpirationMessage = function() {
      return this.expiration;
    };

    class Coupon {
      constructor(price, expiration) {
        this.price = price;
        this.expiration = expiration;
      }

      getPriceText() {
        return this.price;
      }

      getExpirationMessage() {
        return this.expiration;
      }
    }
    ```

2.  상속을 메서드를 공유하라.

    ```javascript
    function Coupon(price, expiration) {
      this.price = price;
      this.expiration = expiration;
    }

    Coupon.prototype.getPrice = function() {
      return `${this.price}`;
    };

    function FlashCoupon(price, expiration) {
      Coupon.call(this, price, expiration);
    }

    FlashCoupon.prototype = Object.create(Coupon.prototype);
    FlashCoupon.prototype.constructor = FlashCoupon;

    class FlashCoupon extends Coupon {}
    ```

3.  클래스로 기존의 프로토타입을 확장하라.

4.  get과 set으로 인터페이스를 단순하게 만들어라.

    ```javascript
    class Coupon {
      constructor(price, expiration) {
        this._price = price;
        this.expiration = expiration || "2주";
      }

      get price() {
        return this._price;
      }

      set price(price) {
        this._price = price;
      }

      get expiration() {
        return this.expiration;
      }

      set expiration(expiration) {
        this.expiration = expiration;
      }
    }
    ```

5.  제너레이터로 이터러블 속성을 생성하라.

    ```javascript
    function* getIterator() {
      yield "a";
      yield "b";
      yield "c";
    }

    const iterator = getIterator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    class Gernerator {
      constructor() {
        this.tree = {
          name: 'a',
          child: {
            name: 'b',
            child{
              name:'c'
            }
          }
        }
      }

      *[Symbol.iterator]() {
        let node = this.tree;
        while(node) {
          yield node;
          node = node.child;
        }
      }
    }

    const g = new Generator();
    [...g]
    ```

6.  bind()로 문맥 문제를 해결하라.

    ```javascript
    class Validator {
      constructor() {
        this.message = "가 유효하지 않습니다.";
      }

      setInvalidMessage(field) {
        return `${field}${this.message}`;
      }

      setInvalidMessages(...fields) {
        return fields.map(this.setInvalidMessage.bind(this));
      }
    }
    ```
