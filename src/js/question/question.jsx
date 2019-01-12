import React from 'react';
import { NavLink } from 'react-router-dom';
import './question.less';
// import ContextColors from '../context/context.jsx';
import testQuestions from '../TestQuestions/testQuestions';

export default class Question extends React.Component {
    // static contextType = ContextColors;

    getAnswerDivs =(answers)=>{
        let result = [];
        for (let ind in answers){            
            result.push(
                <div className='flex-row'>
                    <input className='question__inp-ansver' type='radio'></input>
                    <div key={'Answers-'+ind} className='question__answer'>{ answers[ind] }</div>
                </div>
            );
        }
        return result;
    }

    render() {
        const { getAnswerDivs, getActiveLink } = this;
        const { lang, questionNumber, setAnswer } = this.props;
        const objQuestion = testQuestions[lang][questionNumber];
        const answers = getAnswerDivs(objQuestion.answers);
        const linkLeft = (questionNumber - 1 < 1 ? '/' : '/question-'+ (questionNumber - 1));
        const linkRight = (questionNumber + 1 > 12 ? '/question-13' : '/question-'+ (questionNumber+1));
        // setAnswer(questionNumber)

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