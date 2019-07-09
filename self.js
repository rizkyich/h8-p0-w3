var kalimat =  'love'

kalimat = kalimat + ' '
var totalKata = 0;
for (var i=0; i<kalimat.length; i++){
  if (kalimat[i] === ' ') {
    totalKata++;
  }
  
}

console.log(totalKata)
