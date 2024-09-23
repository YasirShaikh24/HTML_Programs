function generateFibonacci(n) {
    let fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }
    return fibSeries;
}

function displayFibonacci() {
    const seriesLength = 10; // Change this value to generate more numbers
    const fibSeries = generateFibonacci(seriesLength);
    const seriesContainer = document.getElementById('fibonacci-series');
    seriesContainer.innerHTML = fibSeries.join(', ');
}

window.onload = displayFibonacci;
