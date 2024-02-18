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
}

document.getElementById('apply-button').addEventListener('click', function () {
  const couponCode = document.getElementById('coupon-field');
  couponApply(couponCode.value);
  document.getElementById('coupon-field').value = '';
})