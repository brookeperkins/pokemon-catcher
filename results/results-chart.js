import {
    getPokeCart,
    clearPokeCart,
    mungeNames,
    mungeCaptured,
    mungeEncountered,
    mungePokeData,
} from '../results/results-utils.js';

import pokeData from '../pokemon.js';

const pokemonData = getPokeCart();
const mungedNames = mungeNames(pokemonData);
const mungedCaptured = mungeCaptured(pokemonData);
const mungedEncountered = mungeEncountered(pokemonData);
const height = mungePokeData(pokeData, 'height');
const weight = mungePokeData(pokeData, 'weight');
const type1 = mungePokeData(pokeData, 'type_1');
const type2 = mungePokeData(pokeData, 'type_2');
const attack = mungePokeData(pokeData, 'attack'); 

const restartButton = document.getElementById('restart-button');

const newChart = document.getElementById('chart-1').getContext('2d');
const myChart = new Chart(newChart, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: mungedNames,
        datasets: [{
            label: 'Pokemon Captured',
            data: mungedCaptured,
            backgroundColor: 
                'red',
            borderColor:
                'black',
            borderWidth: 2
        },
        {
            label: 'Pokemon Encountered',
            data: mungedEncountered,
            backgroundColor: 
                'yellow',
            borderColor: 
                'black',
            borderWidth: 2
        },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

const newChart2 = document.getElementById('chart-2').getContext('2d');
const myChart2 = new Chart(newChart2, { // eslint-disable-line
    type: 'line',
    data: {
        labels: mungedNames,
        datasets: [{
            label: 'Pokémon by Height',
            data: height,
            borderColor:
                'blue',
            borderWidth: 1
        },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

const newChart3 = document.getElementById('chart-3').getContext('2d');
const myChart3 = new Chart(newChart3, { // eslint-disable-line
    type: 'line',
    data: {
        labels: mungedNames,
        datasets: [{
            label: 'Pokémon by Weight',
            data: weight,
            borderColor:
                'red',
            borderWidth: 1
        },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

const newChart4 = document.getElementById('chart-4').getContext('2d');
const myChart4 = new Chart(newChart4, { // eslint-disable-line
    type: 'radar',
    data: {
        labels: type1,
        datasets: [{
            label: 'Type1 Attack Power',
            data: attack,
            backgroundColor: 
            'blue',
            borderColor:
                'red',
            borderWidth: 2
        },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

const newChart5 = document.getElementById('chart-5').getContext('2d');
const myChart5 = new Chart(newChart5, { // eslint-disable-line
    type: 'radar',
    data: {
        labels: type2,
        datasets: [{
            label: 'Type2 Attack Power',
            data: attack,
            backgroundColor: 'yellow',
            borderColor:
                'blue',
            borderWidth: 2
        },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

restartButton.addEventListener('click', () => {
    clearPokeCart();
    window.location = '../index.html';

});
