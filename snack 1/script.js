/*
**Snack 1**
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const biciclette = [
  {
    nome : 'yamaha',
    peso : '10kg'
  },
  {
    nome : 'rockrider',
    peso : '12kg'
  },
  {
    nome : 'ernesto',
    peso : '9kg'
  },
  {
    nome : 'saetta',
    peso : '10kg'
  },
  {
    nome : 'mcQueen',
    peso : '7kg'
  }  
]

const list = document.getElementById('list')

for(let i in biciclette){
  //creo l'elelmento li
  const li = document.createElement('li');
  //inserisco le proprietà delle bici
  li.innerText = `Nome: ${biciclette[i].nome}, Peso: ${biciclette[i].peso}`
  //aggiungo l'elelmento li dentro l'elemento list
  list.append(li)
}

let lessWeight = biciclette[0]

for (const key in biciclette) {
  const bici = biciclette[key];

  if(parseInt(lessWeight.peso) > parseInt(bici.peso)){
    lessWeight = bici;
  }
  document.getElementById('output').innerHTML = `la bicicletta ${lessWeight.nome} è la più leggera con un peso di ${lessWeight.peso}`
}