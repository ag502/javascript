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
