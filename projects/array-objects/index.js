/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами.
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el)); // выведет каждый элемент массива
 */
function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    fn(el, i, arr);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами.
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   const newArray = map([1, 2, 3], (el) => el ** 2);
   console.log(newArray); // выведет [1, 4, 9]
 */
function map(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const newEl = fn(el, i, arr);
    newArr.push(newEl);
  }
  return newArr;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами.
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   const sum = reduce([1, 2, 3], (all, current) => all + current);
   console.log(sum); // выведет 6
 */
function reduce(arr, fn, initialValue) {
  let result = 0;
  let startIndex = 0;

  if (initialValue != undefined) {
    result = initialValue;
  } else {
    result = arr[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < arr.length; i++) {
    const el = arr[i];
    result = fn(result, el, i, arr);
  }
  return result;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   const keys = upperProps({ name: 'Сергей', lastName: 'Петров' });
   console.log(keys) // выведет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  const arr = Object.keys(obj);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const upperString = arr[i].toUpperCase();
    newArr.push(upperString);
  }
  return newArr;
}

export { forEach, map, reduce, upperProps };
