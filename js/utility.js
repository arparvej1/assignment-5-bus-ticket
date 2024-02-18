function setSelectSeat(value) {
  const li = document.createElement('tr');
  li.innerHTML = `
  <tr class="border-none">
  <td>${value}</td>
  <td>Economoy</td>
  <td class="text-right">550</td>
  </tr>
`;
  addSelectedSeat.appendChild(li);
}

function setSeatUpdate() {
  document.getElementById('seat-left').innerText = seats.length - selectedSeat.length;
  document.getElementById('select-seat').innerText = selectedSeat.length;
}

function setSeatBgColor(seat) {
  seat.classList.add('seat-select');
}

function enableCouponButton() {
  if (selectedSeat.length === 4) {
    document.getElementById('apply-button').disabled = false;
    document.getElementById('coupon-field').disabled = false;
  }
}

function hideCouponFieldCol() {
  document.getElementById('coupon-field-row').classList.add('hidden');
}

function couponApply(coupon) {
  if (coupon === 'NEW15' || coupon === 'Couple 20') {
    discount = coupon === 'NEW15' ? totalPrice * 0.15 : totalPrice * 0.2;
    hideCouponFieldCol();
    setGrandPrice();
    showDiscount();
  } else {
    alert('Invalid Coupon.');
  }
};

function setTotalPrice() {
  document.getElementById('total-price').innerText = totalPrice;
  setGrandPrice();
}

function setGrandPrice() {
  document.getElementById('grand-total').innerText = totalPrice - discount;
}

function showDiscount(){
  document.getElementById('discount').innerText = discount;
  document.getElementById('discount-row').classList.remove('hidden');
}