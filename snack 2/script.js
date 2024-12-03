/* **Snack2**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const squadre = [
  {nome: 'Juventus', punti: 0, falli: 0},
  {nome: 'Milan', punti: 0, falli: 0},
  {nome: 'Inter', punti: 0, falli: 0},
  {nome: 'Napoli', punti: 0, falli: 0},
  {nome: 'Roma', punti: 0, falli: 0},
]

const list = document.getElementById('list')


for(let i in squadre){
  squadre[i].punti = getRandomNumber(10, 100)
  squadre[i].falli = getRandomNumber(0, 50)
  const li = document.createElement('li')
  li.innerHTML = `Nome: ${squadre[i].nome}, punti fatti: ${squadre[i].punti}, falli subiti: ${squadre[i].falli}`
  list.append(li)
}

const nomiEFalli = squadre.map(squadra => {
  return { nome: squadra.nome, falli: squadra.falli };
})

const output = document.getElementById('output')

for(let i in nomiEFalli){
  const li = document.createElement('li')
  li.innerHTML = `Nome: ${nomiEFalli[i].nome}, falli subiti: ${nomiEFalli[i].falli}`
  list.append(li)
}

console.log("Array completo con tutte le squadre: ",squadre);
console.log("Nuovo array con nomi e falli: ",nomiEFalli);