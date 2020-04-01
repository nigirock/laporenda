$(document).ready(function () {
// Инициализируем объект с данными
    var data = { instrument: [
        {
            /* =========== Шуруповерт ==============*/
            nameInstr: 'Шуруповерт',
            brandInstr: 'DeWalt',
            modelInstr: 'DCD771C2',
            description:[
                'Тип аккумуляторной батареи	XR Li-Ion',
                'Напряжение	18 В',
                'Емкость батареи	1.3 Ач',
                'Макс. крутящий момент (жёсткий)	42 Нм',
                'Макс. крутящий момент (мягкий)	24 Нм',
                'Скорость на х.х.	0-450/1500 об./мин.',
                'Патрон	1.5-13 мм',
                'Макс. диаметр сверления (Дерево)	30 мм',
                'Макс. диаметр сверления (Металл)	13 мм',
                'Выходная мощность	300 Вт',
                'Вес	1.65 кг'
            ],
            image: 'img/DCD771C2-.jpg',
            price: "10"
        },
                            /* =========== Перфораторы,дрели ==============*/
        {
            nameInstr: 'Перфоратор',
            brandInstr: 'DeWalt',
            modelInstr: 'D25144K',
            description:[
                'Потребляемая мощность	900 Вт ',
                'Выходная мощность	300 Вт ',
                'Скорость на х.х.	0-1450 об./мин.',
                'Кол-во ударов в минуту	0–5350 уд/мин',
                'Энергия удара	3.2 Дж',
                'Патрон	SDS-Plus',
                'Макс. диаметр сверления (Дерево)	30 мм',
                'Макс. диаметр сверления (Металл)	13 мм',
                'Макс. диаметр сверления (Бетон)	28 мм',
                'Макс. диаметр сверления (Полая коронка)	50 мм',
                'Вес	3.1 кг'
            ],
            image: 'img/D25144K.jpg',
            price: "10"
        },

        /* =========== Отбойный молоток ==============*/
        {
            nameInstr: 'Отбойный молоток',
            brandInstr: 'Stanley',
            modelInstr: 'STHM5K',
            description:[
                'Потребляемая мощность (Вт)	1100',
                'Энергия удара (Дж)	8,5',
                'Вес	6.3 кг',
                'Число ударов	0 - 2900 уд/мин',
                'Патрон	SDS-Max'
            ],
            image: 'img/STHM5KS.jpg',
            price: "20"
        },
                            /* =========== Болгарка малая ==============*/
        {
            nameInstr: 'Болгарка (УШМ)',
            brandInstr: 'DeWalt',
            modelInstr: 'D28136',
            description:[
                'Потребляемая мощность	1500 Вт',
                'Скорость на х.х.	2800 - 10500 об./мин.',
                'Диаметр диска	125 мм',
                'Резьба шпинделя	M14',
                'Вес	2.6 кг',
                'Длина	315 мм'
            ],
            image: 'img/D28136-.jpg',
            price: "10"
        },
        {
            nameInstr: 'Болгарка (УШМ)',
            brandInstr: 'Калибр',
            modelInstr: 'МШУ 125/900Е',
            description:[
                'Потребляемая мощность	900 Вт',
                'Скорость на х.х. 11000 об./мин.',
                'Диаметр диска	125 мм',
                'Резьба шпинделя	M14',
                'Вес	2.2 кг'
            ],
            image: 'img/calibr125_900.jpg',
            price: "7"
        },
        /* =========== Болгарка большая ==============*/
        {
            nameInstr: 'Болгарка (УШМ)',
            brandInstr: 'Stanley',
            modelInstr: 'STGL2223',
            description:[
                'Число оборотов в минуту	6500',
                'Потребляемая мощность (Вт)	2200',
                'Диаметр диска	230',
                'Резьба шпинделя	M14',
                'Вес	6 кг',
                'Длина	540 мм'
            ],
            image: 'img/STGL2223.jpg',
            price: "10"
        },

        /* =========== Ленточная шлифмашинка ==============*/
        {
            nameInstr: 'Ленточная шлифмашинка',
            brandInstr: 'Stanley',
            modelInstr: 'STBS720',
            description:[
                'Скорость движения ленты	250',
                'Потребляемая мощность (Вт)	720',
                'Размер шлифовальной ленты	75x533',
                'Размер шлифовальной поверхности	75x190',
                'Вес	3.06 кг',
                'Длина	360 мм'
            ],
            image: 'img/STBS720.jpg',
            price: "10"
        },
        /* =========== эксцентриковая шлифмашина ==================*/
        {
            nameInstr: 'Эксцентриковая шлифмашина',
            brandInstr: 'DWT',
            modelInstr: 'EX-125 VS',
            description:[
                'частота вращения диска до 12000 об/мин',
                'Потребляемая мощность (Вт)	450',
                'диаметр диска до 125 мм',
                'ход платформы 2.5 мм',
                'Вес	2.35 кг',
                'Длина	360 мм'
            ],
            image: 'img/DWT125vs.jpg',
            price: "10"
        },
        /* =========== Полировальная машина ==================*/
        {
            nameInstr: 'Полировальная машина',
            brandInstr: 'Makita',
            modelInstr: 'SA7000C',
            description:[
                'Макс. частота вращения диска 4000 об/мин',
                'Потребляемая мощность (Вт)	1600',
                'диаметр диска  180 мм',
                'Резьба шпинделя M14',
                'Вес	3.3 кг'
            ],
            image: 'img/makita_sa7000c$521.jpg',
            price: "12"
        },
        /* =========== Циркулярная пила ==============*/
        {
            nameInstr: 'Циркулярная пила',
            brandInstr: 'Stanley',
            modelInstr: 'STSC1618',
            description:[
                'Число оборотов в минуту	5500',
                'Потребляемая мощность (Вт)	1600',
                'Угол наклона (°)	45',
                'Посадочный диаметр	15.8',
                'Глубина реза при 90° (мм)	62',
                'Глубина реза при 45° (мм)	46',
                'Диаметр диска (мм)	185',
                'Вес	3.92кг'
            ],
            image: 'img/STSC1718.jpg',
            price: "15"
        },
        /* =========== Электрорубанок ==============*/
        {
            nameInstr: 'Электрорубанок',
            brandInstr: 'Stanley',
            modelInstr: 'STPP7502',
            description:[
                'Число оборотов в минуту	16500',
                'Потребляемая мощность (Вт)	750',
                'Глубина строгания (см)	2',
                'Длина подошвы (мм)	29',
                'Выборка четверти (мм)	12',
                'Ширина строгания (мм)	82',
                'Вес	2.8 кг',
                'Длина	340 мм'
            ],
            image: 'img/STPP7502.jpg',
            price: "10"
        },
                                /* =========== Лобзики ==============*/
        {
            nameInstr: 'Лобзик',
            brandInstr: 'Stanley',
            modelInstr: 'STSJ0600',
            description:[
                'Потребляемая мощность,Вт - 600',
                'Частота хода на холостом ходу,об/мин  - 850-3000',
                'Глубина пропила в древесине,мм  - 85',
                'Глубина пропила в алюминии,мм  - 15',
                'Глубина пропила в стали,мм  - 5',
                'Угол резки под наклоном 0° - 45°',
                'Длина хода пилки,мм - 20',
                'Ступени маятникового хода -  3',
                'Вес,кг  - 2,33'
            ],
            image: 'img/STSJ0600_1.jpg',
            price: "7"
        },

        /* =========== Сабельная пила ==============*/
        {
            nameInstr: 'Сабельная пила',
            brandInstr: 'Makita',
            modelInstr: 'JR3070CT',
            description:[
                'Мощность: 1510 Вт',
                'Число ходов полотна в минуту: 0-2700',
                'Глубина пропила: Дерево - 230 мм',
                'Глубина пропила: Металл - 20 мм',
                'Вес,кг  - 3,6'
            ],
            image: 'img/3070.jpg',
            price: "15"
        },
        /* =========== Фрезер ==============*/
        {
            nameInstr: 'Фрезер',
            brandInstr: 'Bosch',
            modelInstr: 'POF 1400',
            description:[
                'Мощность 1 400 Вт',
                'Тип вертикальный',
                'Рабочий ход (глубина) 55 мм',
                'Частота вращения (холостой ход) 11 000 — 28 000 об/мин',
                'Диаметр хвостовика фрезы 6 мм, 8 мм',
                'Вес 3.5 кг'
            ],
            image: 'img/frezer.jpg',
            price: "9"
        },
        /* =========== Торцовочная пила ==============*/
        {
            nameInstr: 'Торцовочная пила',
            brandInstr: 'Stanley',
            modelInstr: 'STSM1510',
            description:[
                'Число оборотов в минуту	5500',
                'Потребляемая мощность (Вт)	1500',
                'Угол наклона (°)	45',
                'Посадочный диаметр	30',
                'Глубина реза при 90°/90° (мм)	140x70',
                'Глубина реза при 45°/90° (мм)	95x70',
                'Глубина реза при 90°/45° (мм)	140x35',
                'Глубина реза при 45°/45° (мм)	95x35',
                'Диаметр диска (мм)	254',
                'Вес (кг)	16'
            ],
            image: 'img/STSM1510.jpg',
            price: "12"
        },
        /* =========== Плиткорез ==============*/
        {
            nameInstr: 'Плиткорез',
            brandInstr: 'Stanley',
            modelInstr: 'STSP125',
            description:[
                'Число оборотов в минуту	13000',
                'Потребляемая мощность (Вт)	1320',
                'Глубина реза	41',
                'Длина (мм)	235',
                'Диаметр диска (мм)	125',
                'Вес (кг)	3.1'
            ],
            image: 'img/STSP125.jpg',
            price: "10"
        },
        /* =========== Строительный фен ==============*/
        {
            nameInstr: 'Строительный фен',
            brandInstr: 'Stanley',
            modelInstr: 'STXH2000',
            description:[
                'Потребляемая мощность (Вт)	2000',
                'Воздушный поток (л/мин)	300/500',
                'Вес (кг)	0.8',
                'Operating Temperature (°C)	50-450 / 90-600'
            ],
            image: 'img/STXH2000.jpg',
            price: "5"
        },
        /* =========== Строительный пылесос ==============*/
        {
            nameInstr: 'Пылесос',
            brandInstr: 'Makita',
            modelInstr: 'VC 3011 L',
            description:[
                'Потребляемая мощность (Вт)	1000',
                'Тип машины	пылесос - (сухая и влажная уборка)',
                'Расход воздуха	60 л/с',
                'Вес (кг)	10.5',
                'Макс. потребляемая мощность подключенного к пылесосу инструмента - 2600 Вт'
            ],
            image: 'img/makitaVC3011L.JPG',
            price: "15"
        },
        /* =========== Бетономешалка ==============*/
        {
            nameInstr: 'Бетономешалка',
            brandInstr: 'ECO',
            modelInstr: 'CM-125',
            description:[
                'Принцип действия - гравитационный',
                'Объем барабана - 125 л',
                'Объем готовой смеси - 85 л',
                'Тип двигателя - электрический',
                'Мощность - 650 Вт',
                'Вес - 43 кг'
            ],
            image: 'img/cm125_eco.jpeg',
            price: "10"
        },
        /* =========== виброплита ==============*/
        {
            nameInstr: 'Виброплита',
            brandInstr: 'Skiper',
            modelInstr: 'C120',
            description:[
                'Тип двигателя - бензиновый',
                'Мощность - 4.05 кВт',
                'Мощность в л.с. - 6.5 л.с.',
                'Масса - 95 кг',
                'Глубина уплотнения - 350 мм',
                'Ширина рабочей поверхности - 500 мм'
            ],
            image: 'img/skiper.jpeg',
            price: "20"
        },
        /* =========== построитель плоскостей ==============*/
        {
            nameInstr: 'Построитель плоскостей',
            brandInstr: 'Ada',
            modelInstr: '2D Basic',
            description:[
                'Функции - строит горизонт. и вертик. линии, отвес',
                'Точность измерений - ± 3/10 мм/м',
                'Источники питания - 3×1.5 V AA',
                'Дальность измерения с/без приемником - 30 м / 15 м',
                'Направление лучей - >180° (гор. разворот) / >160° (верт. разворот)',
                'Количество лучей - 2'
            ],
            image: 'img/ada2d.jpg',
            price: "12"
        },
        /*============= Бензопилы =====================*/

        /*============= Компрессор =====================*/
        {
            nameInstr: 'Компрессор',
            brandInstr: 'Forsage',
            modelInstr: 'TB265-100',
            description:[
                'Мощность 2.2 кВт',
                'Ресивер 100 литров',
                'Производительность 250 л/мин',
                'Напряжение	220 вольт',
                'Давление	8 атм'
            ],
            image: 'img/compressor.jpg',
            price: "15"
        },
        /* =========== строительные леса ==============*/
        {
            nameInstr: 'Строительные леса',
            brandInstr: 'РинСтрой',
            modelInstr: 'Компакт',
            description:[
                'Компактная строительная вышка(леса)',
                'Высота - 4,2м',
                'Ширина - 0,7м',
                'Длина - 1,2м',
                'Нагрузка - 250кг',
                'Легкая транспортировка'
            ],
            image: 'img/lesa.jpg',
            price: "5"
        }
    ]};

// Получаем шаблон
    var templateScript = $('#catalog').html();

// Функция Handlebars.compile принимает шаблон и возвращает новую функцию
    var template = Handlebars.compile(templateScript);

// Формируем HTML и вставляем в документ
    $(document.body).append(template(data));
});
