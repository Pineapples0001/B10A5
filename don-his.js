document.getElementById('show-history-btn').addEventListener('click', function() {
    this.querySelector('button').classList.add('bg-lime-300');
    document.getElementById('history').classList.remove('hidden')
    document.getElementById('donation-cards').classList.add('hidden')
    document.getElementById('donation-btn-color').classList.remove('bg-lime-300')
});

document.getElementById('show-donation-btn').addEventListener('click', function() {
    this.querySelector('button').classList.add('bg-lime-300');
    document.getElementById('history').classList.add('hidden')
    document.getElementById('donation-cards').classList.remove('hidden')
    document.getElementById('history-btn-color').classList.remove('bg-lime-300')
});