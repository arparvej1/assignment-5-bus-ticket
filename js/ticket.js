const seats = document.getElementsByClassName('seat');
const addSelectedSeat = document.getElementById('add-selected-seat');
const selectedSeat = [];
let totalPrice = 0;
let discount = 0;

for (const seat of seats) {
  seat.addEventListener('click', function () {
    if (selectedSeat.length >= 4) {
      alert("Maximum Seat Booked.");
    } else {
      if (selectedSeat.includes(seat.innerText)) {
        alert("Already Seat Booked.");
      } else {
        totalPrice += 550;
        setTotalPrice();
        selectedSeat.push(seat.innerText);
        setSelectSeat(seat.innerText);
        setSeatBgColor(seat);
        setSeatUpdate();
        enableCouponButton();
      }
    }
  })
};

document.getElementById('apply-button').addEventListener('click', function () {
  const couponCode = document.getElementById('coupon-field');
  couponApply(couponCode.value);
  document.getElementById('coupon-field').value = '';
});

document.getElementById('next-button').addEventListener('click', function () {
  const name = document.getElementById('name').value;
  const phoneText = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  if (selectedSeat.length > 0) {
    if (!Number.isInteger(phoneText) && isNaN(phoneText)) {
      alert('Please input correct phone number.');
    } else if (phoneText.length === 0) {
      alert('Input your phone number.');
    } else if (name.length === 0) {
      alert('Input your name.');
    } else if (email.length === 0) {
      alert('Input your email.');
    } else {
      nextPage();
    }
  } else {
    alert('Select your seat.');
  }
});
