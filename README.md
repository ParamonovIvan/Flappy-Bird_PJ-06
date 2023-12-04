# Проект: «Мини-игра Flappy Bird на JS + Canvas API»

При разработке игры отработаются следующие навыки:

+ Проектирование и отладка комплексного проекта.

+ Работа с Canvas API.

+ Работа с ООП и использование ES6-классов.

+ Управление логикой взаимодействия пользователя с интерфейсом программы.


### Задача проекта:

+ Создать мини-игру “Flappy Bird” на JS + Canvas API.

### Функциональные требования:

+ Птица не должна улетать за границы поля. Если птица касается земли, игра заканчивается, если «потолка» — игра продолжается.

+ Если птица касается трубы, игра заканчивается.

+ При клике на окно игры птица подлетает вверх на высоту, равную половине высоты свободного промежутка в трубе.

+ При бездействии игрока птица падает с ускорением.

+ Свободный промежуток в трубе занимает 25 % высоты трубы.

+ Высота птицы составляет 20 % от высоты свободного промежутка в трубе.

+ Ширина трубы вдвое больше ширины птицы.

+ Расстояние между трубами равно ширине трёх труб.

+ Птица двигается с такой скоростью, что новые трубы появляются каждую секунду.

+ Подсчитывается текущее количество баллов. Оно увеличивается, когда птица преодолевает середину свободного промежутка в трубе.

+ Лучший результат игрока (максимальное количество набранных баллов) сохраняется в localStorage и отображается под текущим количеством баллов, если игра запускается не в первый раз.

+ Птица анимирована (вращается при движении в сторону полёта).

### Требования к интерфейсу:

Строгих требований к интерфейсу нет, но он должен содержать:

+ Окно с игрой.

+ Окно с текущими баллами и лучшим результатом, если игра запускается не впервые.

+ Кнопку запуска или перезапуска после завершения игры.

### Требования к коду:

+ Использовать классический JavaScript без дополнительных библиотек.

+ Давать переменным, классам и функциям осмысленные имена.

+ Правильно использовать отступы.

+ Применть ООП на ES6-классах.

+ Следовать принципам DRY (Don’t Repeat Yourself) и KISS (Keep It Short and Simple).

+ Сделать обработку получения очков и логику игры независимой от используемого метода отображения игры и используемой в игре физики.

+ Вынести в отдельный класс логику расчёта отрисовки на канвасе, чтобы можно было, например, заменить отрисовку на канвасе на отрисовку в DOM без изменения кода самой игры, просто поменяв класс, отвечающий за отрисовку.

+ Вынести в отдельный класс логику падения птицы, чтобы, если понадобится более сложная и реалистичная логика расчёта механики птицы, можно было заменить класс, отвечающий за эту логику, и не переписывать остальной код (например, если в будущем использовать какой-нибудь физический движок).

+ Вынести константы в отдельный файл конфига, разбить их на логические блоки.

+ Грамотно разбить проект на файлы, продумать и реализовать их структуру.

### Дополнительное задание:

+ Добавить в игру увеличение уровня сложности при достижении определённого количества очков (например, при достижении порога очков в 10, 100, 1000, 1000 и так далее увеличивать скорость движения карты) и альтернативный способ управления, например поддержку геймпада или и клавиатуры, и мыши;

+ Адаптировать игру под мобильные устройства (от 360 px до 1024 px);

+ Добавить в игру звуки с использованием Audio API.

### Результат работы:

#### Ссылка на страницу с игрой:

+ https://paramonovivan.github.io/Flappy-Bird_PJ-06/

#### Внешний вид страницы с игрой:

![FB1](https://github.com/ParamonovIvan/Flappy-Bird_PJ-06/assets/131868856/a6bf9459-0068-46f0-a7e8-d786427b7e0e)

![FB2](https://github.com/ParamonovIvan/Flappy-Bird_PJ-06/assets/131868856/50a0d2e0-04dc-48d5-ab57-98535bbd8d73)

![FB3](https://github.com/ParamonovIvan/Flappy-Bird_PJ-06/assets/131868856/59cb949e-5c3a-4a79-813d-f1334f44087e)
