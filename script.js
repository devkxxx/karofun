const kombinacje = {
  'Ogień+Woda': 'Para',
  'Woda+Ziemia': 'Błoto',
  'Powietrze+Ogień': 'Dym',
  'Ziemia+Ogień': 'Lawa',
  'Woda+Powietrze': 'Chmura'
};

function polacz() {
  const el1 = document.getElementById('element1').value;
  const el2 = document.getElementById('element2').value;

  const klucz1 = el1 + '+' + el2;
  const klucz2 = el2 + '+' + el1;

  const wynik = kombinacje[klucz1] || kombinacje[klucz2] || 'Nic nie powstało 😅';
  document.getElementById('wynik').innerText = wynik;
}
