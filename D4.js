/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  let area = l1 * l2
  console.log('L area di l1 ed l2 equivale a: ', area)
}
area(5, 9)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (p1, p2) {
  let total = 0
  if (p1 !== p2) {
    total = p1 + p2
  } else {
    total = (p1 + p2) * 3
  }
  console.log('La somma pazza folle sgravata equivale a:', total)
}
crazySum(3, 3)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (p1) {
  let differenzaAssoluta = 0
  if (p1 < 19) {
    differenzaAssoluta = Math.abs(19 - p1)
  } else {
    differenzaAssoluta = Math.abs((19 - p1) * 3)
  }

  console.log(
    `La differenza assoluta pazza sgravata equivale a: `,
    differenzaAssoluta
  )
}
crazyDiff(18)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n1) {
  let total = null
  if ((n1 >= 20 && n1 <= 100) || n1 === 400) {
    total = true
  } else {
    total = false
  }
  console.log(total)
}
boundary(20)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (s1) {
  let a1 = ''
  if (s1.startsWith('EPICODE')) {
    return (a1 = s1)
  } else {
    return (a1 = 'EPICODE ' + s1)
  }
}
console.log(epify('EPICODE'))
console.log(epify('E BELLISSIMO'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (p1) {
  let numb = ``
  if (p1 % 3 === 0 || p1 % 7 === 0) {
    numb = `Il numero fornito è un multiplo di 3 o 7`
  } else {
    numb = `Il numero fornito non è un multiplo di 3 o 7`
  }
  console.log(numb)
}

check3and7(1)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function reverseString(str) {
  const strRev = str.split('').reverse().join('')
  console.log(strRev)
}
reverseString('Signore')
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (string) {
  let parole = string.split(' ')

  for (let i = 0; i < parole.length; i++) {
    parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1)
  }

  return parole.join(' ')
}
console.log(upperFirst('ciao come stai'))
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (stringa) {
  // Controlla che la stringa abbia almeno 2 caratteri
  if (stringa.length <= 2) {
    return ''
  }

  return stringa.slice(1, -1)
}

console.log(cutString('Epicoders'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (numeri) {
  let randomNumbers = []

  for (let i = 0; i < numeri; i++) {
    let randomNumber = Math.floor(Math.random() * 11)
    randomNumbers.push(randomNumber)
  }

  return randomNumbers
}

console.log(giveMeRandom(5))
