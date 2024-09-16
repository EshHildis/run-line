# Бегущая строка

## Исходники
Пример реализации в папке [src](./src)

## Пояснение по коду:

1. **HTML**:
   - Создаётся контейнер `.line`, внутри которого находится группа изображений `.line__group`. Этот блок будет анимироваться и прокручиваться по горизонтали.
   
2. **CSS**:
   - `.line`: Это основной контейнер, который скрывает всё, что выходит за его пределы (свойство `overflow: hidden`).
   - `.line__group`: Это группа, которая содержит изображения и анимируется с помощью `@keyframes scroll`. Здесь задаётся сама анимация.
   - `.line__elem`: Каждое изображение имеет одинаковую высоту и фиксированный отступ между собой.
   - При наведении на изображение (`:hover`), оно увеличивается до 1.5 раза, а при наведении на сам контейнер, анимация прокрутки останавливается.
   
3. **JavaScript**:
   - Скрипт запускается, когда DOM полностью загружен.
   - Мы собираем все элементы внутри контейнера `.js-line` и вычисляем их общую ширину, чтобы понять, сколько нужно клонировать изображений.
   - Клонируются элементы столько раз, сколько необходимо для плавной бесконечной анимации.
   - Настраивается длительность анимации (`animationDuration`), которая зависит от общего количества контента. Чем больше контента, тем дольше будет длиться один цикл анимации.

### Как это работает:

1. **Анимация**: Изображения плавно перемещаются по горизонтали благодаря CSS-анимации. Длительность анимации динамически подстраивается под ширину содержимого.
2. **Бесконечная прокрутка**: Клонирование элементов в конце позволяет анимации быть бесшовной и создавать эффект бесконечной бегущей строки.
3. **Пауза при наведении**: Анимация останавливается, когда пользователь наводит курсор на строку изображений, а сами изображения увеличиваются при наведении.

Таким образом, код обеспечивает бесшовную и плавную прокрутку с возможностью взаимодействия пользователя (увеличение изображений и пауза анимации).