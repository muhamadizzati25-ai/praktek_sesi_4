var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];

var hasil = {};

for (var i = 0; i < motoGP.length; i++) {
  var event = motoGP[i];
  var negara = event.winner.country;

  if (!hasil[negara]) {
    hasil[negara] = {
      winningCircuits: [],
      totalWin: 0
    };
  }

  hasil[negara].winningCircuits.push({
    name: event.winner.firstName + ' ' + event.winner.lastName,
    winLocation: event.circuit + ', ' + event.location
  });

  hasil[negara].totalWin++;
}

console.log(hasil);