const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const buy = document.getElementById('btn-buy');
var soldSeatCount = 0;

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        calculateTotal();
    }
});

select.addEventListener('change', function (e) {
    calculateTotal();
});


function calculateTotal() {
    let selectedSeatCount = container.querySelectorAll('.seat.selected').length - soldSeatCount;
    let price = select.value;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * price;
}

function buyTickets() {
    count.innerText = 0;
    amount.innerText = 0;
    soldSeat = container.querySelectorAll('.seat.selected');
    soldSeatCount = soldSeat.length;
    soldSeat.forEach(function (item) {
        item.classList.remove('selected');
        item.classList.add('reserved');
    });
    soldSeatCount = 0;
    console.log(soldSeat);
}
