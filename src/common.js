/** 
 * Скрипт для управления бесконечной бегущей строкой
 */
document.addEventListener('DOMContentLoaded', () => {
    // Находим элемент с классом .js-line, который содержит все изображения
    const line = document.querySelector('.js-line');

    // Если элемента нет на странице, завершаем выполнение скрипта
    if (!line) {
        return;
    }

    // Преобразуем коллекцию детей (групп изображений) в массив
    const elements = Array.from(line.children);

    // Вычисляем общую ширину всех элементов, чтобы узнать, сколько места они занимают
    const totalWidth = elements.reduce((acc, el) => acc + el.offsetWidth, 0);
  
    // Вычисляем, сколько раз нужно клонировать элементы, чтобы заполнить экран
    let cloneAmount = Math.ceil(window.innerWidth / totalWidth);
  
    // Клонируем элементы необходимое количество раз для создания бесшовного перехода
    for (let i = 0; i < cloneAmount; i++) {
      elements.forEach((el) => {
        const clone = el.cloneNode(true); // Клонируем элемент
        line.appendChild(clone); // Добавляем клонированный элемент в конец списка
      });
    }
  
    // Определяем общую ширину контента, чтобы настроить скорость анимации
    const totalContentWidth = line.scrollWidth;

    // Вычисляем длительность анимации, основанную на ширине контента
    const scrollDuration = totalContentWidth / 100; // Чем больше контент, тем медленнее прокрутка
  
    // Устанавливаем длительность анимации для всех групп изображений
    document.querySelectorAll('.js-line-group').forEach(elem => {
        elem.style.animationDuration = `${scrollDuration}s`; // Длительность анимации
    });
});
