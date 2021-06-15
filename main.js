import {summ} from './sum.js';  //імпортуємо функцію
import {a, b} from './objects.js'; //імпортуємо об'єкти

let p1 = document.createElement('p')
p1.innerText =`Result of simple object = ${summ(a)}`
document.body.append(p1)
let p2 = document.createElement('p')
p2.innerText =`Result of simple object = ${summ(b)}`
document.body.append(p2)

console.log(`Result of simple object = ` + summ(a))
console.log(`Result of middle object = ` + summ(b))
