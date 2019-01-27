import React from 'react';
import { NavLink } from 'react-router-dom';
import './question.less';
// import ContextColors from '../context/context.jsx';
import testQuestions from '../TestQuestions/testQuestions';

export default class Question extends React.Component {

    selectAnswer = (e) => {
        const { lang, questionNumber, setAnswer } = this.props;
        const objQuestion = testQuestions[lang][questionNumber].answers.length;
        const parent = e.target.parentElement.classList.contains('question__ansvers-block')
            ? e.target : e.target.parentElement;

        setAnswer(questionNumber, parent, objQuestion)
    };

    getAnswerDivs =(answers)=>{
        let result = [];
        const { selectAnswer } = this;
        const { checkedAnswers } = this.props;
        for (let ind in answers){
            result.push(
                <div className={ parseInt(checkedAnswers[ind]) ? 'question__answer--checked flex-row question__answer-row' : 'flex-row question__answer-row'} ind={ind} onClick={ selectAnswer }>
                    <input className='question__inp-ansver' checked={ parseInt(checkedAnswers[ind]) } type='radio'></input>
                    <div key={'Answers-'+ind} className='question__answer'>{ answers[ind] }</div>
                </div>
            );
        }
        return result;
    };

    componentDidMount() {
        debugger;
        const { questionNumber, getStat, lang } = this.props;
        this.props.getStat(questionNumber + 1, testQuestions[lang].length)
    }

    render() {
        const { getAnswerDivs, getActiveLink } = this;
        const { lang, questionNumber} = this.props;
        const objQuestion = testQuestions[lang][questionNumber];
        
        const answers   = getAnswerDivs(objQuestion.answers);
        const linkLeft  = (questionNumber < 2  ? '/'            : '/question-'+ (questionNumber    ));
        const linkRight = (questionNumber > 11 ? '/question-13' : '/question-'+ (questionNumber + 2));
        
        return (
            <div className='question__wraper'>
                <NavLink key={'NavLink-'+ questionNumber} className='question__btn-left' to={ linkLeft }></NavLink>
                <div className='question__block'>
                    <div className='question__self'>{ objQuestion.question }</div>
                    <div className='question__ansvers-block'>{ answers }</div>
                </div>
                <NavLink key={'NavLink-'+ (questionNumber + 1)} className='question__btn-right' to={ linkRight }></NavLink>
            </div>
        );
    }
}