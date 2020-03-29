/**
 * Easy Class
 */

class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || "2주";
  }

  getPriceText() {
    return `$ ${this.price}`;
  }

  getExpirationMessage() {
    return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
  }
}

const coupon = new Coupon(5);

console.log(coupon.price);
console.log(coupon.expiration);
console.log(coupon.getPriceText());
console.log(coupon.getExpirationMessage());
console.log(coupon);

function CouponProto(price, expiration) {
  this.price = price;
  this.expiration = expiration;
}

CouponProto.prototype.getPriceText = function() {
  return `$ ${this.price}`;
};

CouponProto.prototype.getExpirationMessage = function() {
  return `${this.expiration}`;
};

const couponProto = new CouponProto(1, "2주");
console.log(couponProto.getPriceText());

/**
 * Inheritance
 */

class FlashCoupon extends Coupon {
  constructor(price, expiration) {
    super(price);
    this.expiration = expiration || "2시간";
  }
}

const flash = new FlashCoupon(10);
console.log(flash.price);
console.log(flash.expiration);

function FlashCouponProto(price, expiration) {
  CouponProto.call(this, price);
  this.expiration = expiration || "2시간";
}

FlashCouponProto.prototype = Object.create(CouponProto.prototype);
FlashCouponProto.prototype.constructor = FlashCoupon;

const flashCouponProto = new FlashCouponProto(5);
console.log(flashCouponProto.getExpirationMessage());

/**
 * getter, setter
 */

class CouponPrivate {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || "2주";
  }

  //   getPriceText() {
  //     return `$ ${this.price}`;
  //   }

  //   getExpirationMessage() {
  //     return `이 쿠폰은 ${this.expiration} 후에 만료 됩니다.`;
  //   }

  get priceText() {
    return `$ ${this.price}`;
  }

  get expirationMessage() {
    return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
  }
}

const coupon3 = new CouponPrivate(5);
// console.log(coupon3.getPriceText());
// coupon3.price = 20;
// console.log(coupon3.getPriceText());

console.log(coupon3.priceText);

class CouponGetSet {
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
}

const coupon4 = new CouponGetSet(5);

console.log(coupon4.price);
coupon4.price = 11;
console.log(coupon4.price);

/**
 * Generator, Iterable
 */

function* getCaliroTriology() {
  yield "궁전 샛길";
  yield "욕망의 궁전";
  yield "설탕 거리";
}

const trilogy = getCaliroTriology();

console.log(trilogy);
console.log(trilogy.next());
console.log(trilogy.next());
console.log(trilogy.next());
console.log(trilogy.next());

console.log([...getCaliroTriology()]);

const readingList = {
  "깡패단의 방문": true,
  "맨해튼 비치": false
};

for (const book of getCaliroTriology()) {
  readingList[book] = false;
}

console.log(readingList);

class FamilyTree {
  constructor() {
    this.family = {
      name: "Doris",
      child: {
        name: "Martha",
        child: {
          name: "Dyan",
          child: {
            name: "Bea"
          }
        }
      }
    };
  }

  //   getMembers() {
  //     const family = [];
  //     let node = this.family;

  //     while (node) {
  //       family.push(node.name);
  //       node = node.child;
  //     }

  //     return family;
  //   }
  *[Symbol.iterator]() {
    let node = this.family;
    while (node) {
      yield node.name;
      node = node.child;
    }
  }
}

const family = new FamilyTree();
// console.log(family.getMembers());
console.log([...family]);

/**
 * bind()
 */

// class Validator {
//   constructor() {
//     this.message = "가 유효하지 않습니다.";
//   }

//   setInvalidMessage(field) {
//     return `${field}${this.message}`;
//   }

//   setInvalidMessages(...fields) {
//     fields.map(this.setInvalidMessage);
//   }
// }

// const validator = new Validator();
// validator.setInvalidMessages("도시");

// class Validator {
//   constructor() {
//     this.message = "가 유효하지 않습니다.";
//     this.setInvalidMessage = field => `${field}${this.message}`;
//   }

//   setInvalidMessages(...fields) {
//     return fields.map(this.setInvalidMessage);
//   }
// }

// const validator = new Validator();
// console.log(validator.setInvalidMessages("도시"));

function sayMessage() {
  return this.message;
}

const alert = {
  message: "위험해"
};

console.log(sayMessage.bind(alert)());

class Validator {
  constructor() {
    this.message = "가 유효하지 않습니다.";
    //this.setInvalidMessage = this.setInvalidMessage.bind(this);
  }

  setInvalidMessage(field) {
    return `${field}${this.message}`;
  }

  setInvalidMessages(...fields) {
    return fields.map(this.setInvalidMessage.bind(this));
  }
}

const validator = new Validator();
console.log(validator.setInvalidMessages("도시"));
