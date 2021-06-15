export function summ(a) { //експортуємо функцію
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof elem.cvalue === 'number') return elem.cvalue; //додано перевірку на число
        if (elem.cvalue === undefined) return 2021; //прибрано typeof при перевірці на undefined
        if (typeof elem.cvalue === 'string') return +elem.cvalue || 2021; // String з великої літери і повертати в разі невалідної строки повиинна число, а не рядок '2021'
        return summ(elem.cvalue); //прибрано перевірку на неіснуюче поле .isBigObject та оптимізовано рекурсію
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) { //помилка у методі .length, було .lenght
        sum += x[i];  // на даному етапі константа х це масив чисел, а у числа немає поля .cvalue
    }
    return sum; //функція повинна повертати результат виконання змінної sum, а не summ
}
