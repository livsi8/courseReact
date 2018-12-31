const questions = {
    ru: [{
            question: 'Сколько родительских элементов можно вывести одновременно?',
            answers: [
                'Неограниченное количество',
                'Не более 10',
                'Не более 5',
                'Не более 1',
                'Не более 3',
            ],
            bestAnswer: 3,
        },{
            question: 'Как обратится к свойству weight?',
            answers: [
                '{this.weight}',
                '{props.weight}',
                '{this.prop.weight}',
                '{this.props.weight}',
                '{prop.weight}',
            ],
            bestAnswer: 3,
        },{
            question: 'Можно ли писать не используя Babel?',
            answers: [
                'Да, можно',
                'Нет, нельзя',
            ],
            bestAnswer: 0,
        },{
            question: 'Где правильно передена функция в качестве свойства?',
            answers: [
                'argument={this.someFunction}',
                'argument={this.someFunction {}}',
                'argument={someFunction}',
                'argument={this.someFunction ()}',
                'argument=(this.someFunction)'
            ],
            bestAnswer: 0,
        },{
            question: 'Куда можно встроить готовый код из метода рендера?',
            answers: [
                'В div или же в span',
                'В любой тег',
                'Только в div',
                'Только в тег, у которого есть id'
            ],
            bestAnswer: 1,
        },{
            question: 'Какой метод отвечает за вывод информации?',
            answers: [
                'ReactDOM',
                'render',
                'renderer',
                'rend',
                'react'
            ],
            bestAnswer: 2,
        },{
            question: 'Где правильно создан компонент?',
            answers: [
                'var Test = React.Class ({});',
                'var Test = React.createClass ({});',
                'var Test = React.createClass ();',
                'var Test = React.create ({});',
                'var Test = createClass ({});'
            ],
            bestAnswer: 1,
        },{
            question: 'Где правильно выведен компонент через рендер?',
            answers: [
                '</ Test>',
                '<Test />',
                '</Test>',
                '<Test >',
                '<Test>'
            ],
            bestAnswer: 1,
        },{
            question: 'Чем свойства отличаются от состояний?',
            answers: [
                'Состояния можно изменять, свойства нельзя',
                'Свойства для работы со значениями, состояния для работы с функциями',
                'Состояния для работы со значениями, свойства для работы с функциями',
                'Свойства можно изменять, состояния нельзя'
            ],
            bestAnswer: 0,
        },{
            question: 'Как много компонентов может быть на сайте?',
            answers: [
                'Не более 300',
                'Не более 100',
                'Неограниченное количество',
                'Не более 10',
                'Не более 50'
            ],
            bestAnswer: 2,
        },{
            question: 'Какая компания разработала React JS?',
            answers: [
                'Twitter',
                'Amazon',
                'Google',
                'GitHub',
                'Facebook'
            ],
            bestAnswer: 4,
        },{
            question: 'Что необходимо прописать в теге script чтобы JSX корректно обрабатывался?',
            answers: [
                'text/javascript',
                'babel/text',
                'text/babel',
                'text/jsx',
                'txt/babel'
            ],
            bestAnswer: 4,
        },{
            question: 'React JS это...',
            answers: [
                'JS библиотека',
                'MVC-фреймворк',
                'фреймворк'
            ],
            bestAnswer: 0,
        }
    ],
    en: [{
            question: 'How many parent elements can be displayed simultaneously?',
            answers: [
                'Unlimited quantity',
                'No more than 10',
                'No more than 5',
                'No more than 1',
                'No more than 3',
            ],
            bestAnswer: 3,
        },{
            question: 'How to access the weight property?',
            answers: [
                '{this.weight}',
                '{props.weight}',
                '{this.prop.weight}',
                '{this.props.weight}',
                '{prop.weight}',
            ],
            bestAnswer: 3,
        },{
            question: 'Can I write without using Babel?',
            answers: [
                'Yes you can',
                'No you can not',
            ],
            bestAnswer: 0,
        },{
            question: 'Where is the function correctly transferred as a property?',
            answers: [
                'argument={this.someFunction}',
                'argument={this.someFunction {}}',
                'argument={someFunction}',
                'argument={this.someFunction ()}',
                'argument=(this.someFunction)'
            ],
            bestAnswer: 0,
        },{
            question: 'Where can I embed the finished code from the render method?',
            answers: [
                'In a div or in a span',
                'In any tag',
                'Only in div',
                'Only in tag with id'
            ],
            bestAnswer: 1,
        },{
            question: 'What method is responsible for displaying information?',
            answers: [
                'ReactDOM',
                'render',
                'renderer',
                'rend',
                'react'
            ],
            bestAnswer: 2,
        },{
            question: 'Where is the component created correctly?',
            answers: [
                'var Test = React.Class ({});',
                'var Test = React.createClass ({});',
                'var Test = React.createClass ();',
                'var Test = React.create ({});',
                'var Test = createClass ({});'
            ],
            bestAnswer: 1,
        },{
            question: 'Where is the component correctly displayed through the render?',
            answers: [
                '</ Test>',
                '<Test />',
                '</Test>',
                '<Test >',
                '<Test>'
            ],
            bestAnswer: 1,
        },{
            question: 'How do properties differ from states?',
            answers: [
                'States can be changed, properties cannot be',
                'Properties for working with values, states for working with functions',
                'States for working with values, properties for working with functions',
                'Properties can be changed, states can not'
            ],
            bestAnswer: 0,
        },{
            question: 'How many components can be on the site?',
            answers: [
                'No more than 300',
                'No more than 100',
                'Unlimited quantity',
                'No more than 10',
                'No more than 50'
            ],
            bestAnswer: 2,
        },{
            question: 'What company has developed React JS?',
            answers: [
                'Twitter',
                'Amazon',
                'Google',
                'GitHub',
                'Facebook'
            ],
            bestAnswer: 4,
        },{
            question: 'What needs to be written in the script tag so that JSX is correctly processed?',
            answers: [
                'text/javascript',
                'babel/text',
                'text/babel',
                'text/jsx',
                'txt/babel'
            ],
            bestAnswer: 4,
        },{
            question: 'React JS is...',
            answers: [
                'JS library',
                'MVC-framework',
                'framework'
            ],
            bestAnswer: 0,
        }
    ],
};

export default questions;