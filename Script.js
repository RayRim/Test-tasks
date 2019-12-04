'use strict'

let money = +prompt ("Ваш бюджет на месяц?", ""),
    time = prompt ("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD"); //Тут нет проверки верности ввода и необходимо вводить знаки "-" между значений, что неудобно

var appData = {
    budget: money,    
    timeData: { // Переношу в нее цифры, чтобы можно было обрабатывать отдельно при необходимости
        year: +(time[0]+time[1]+time[2]+time[3]), // простейшим способом, так как использую только базовые знания предыдущих уроков.
        month: +(time[5]+time[6]),
        day: +(time[8]+time[9])
    },
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let firstQuestion = prompt ("Введите обязательную статью расходов в этом месяце", ""), // Можно будет сократить циклом
    secondQuestion = +prompt ("Во сколько обойдется?", "");
    appData.expenses[firstQuestion] = secondQuestion;
    firstQuestion = prompt ("Введите обязательную статью расходов в этом месяце", ""), // Тут нужна проверка, чтобы не перезаписать 1е расходы при одинаковом названии
    secondQuestion = +prompt ("Во сколько обойдется?", "");
    appData.expenses[firstQuestion] = secondQuestion;

let budgetOneDay = appData.budget / 30;
alert ("Ваш бюджет на 1 день составил: " + budgetOneDay.toFixed(2)); // Уменьшаем кол-во знаков после запятой

/* Проверки
console.log(money);
console.log(time);
console.log(appData.timeData);
console.log(appData.expenses);
console.log(budgetOneDay);*/

/*
Ответы на вопросы:
1. Сколько типов данных существует в JS? 7 обычных типов (числа, строки и тп), 5 специальных (массивы, функции и тп)
2. Как вывести информацию в консоль? C помощью команды console.log();
3. Какая функция операторов && и ||? && - это проверка на выполнение всех условий , || - это проверка на выполнение хотя бы одного из условий.
*/