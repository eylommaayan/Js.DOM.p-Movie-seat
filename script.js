const container = document.querySelector('.contaniner');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelector = document.getElementById('movie');

let ticketPrice = +movieSelector.value;

// אירוע בחירת סרט
movieSelector.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

//לעדכן מחיר וסה"כ
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

//אירוע לחיצה על מושב
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});
