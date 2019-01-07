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
            result.push(<div key={'Answers-'+ind} className='question__answer'>{ answers[ind] }</div>);
        }
        return result;
    }

    render() {
        const { getAnswerDivs } = this;
        const { lang, questionNumber } = this.props;
        const objQuestion = testQuestions[lang][questionNumber];
        const answers = getAnswerDivs(objQuestion.answers);

        return (
            <div className='question__wraper'>
                <div className='question__btn-left'>left</div>
                <div className='question__block'>
                    <div className='question__self'>{ objQuestion.question }</div>
                    <div className='question__ansvers-block'>{ answers }</div>
                </div>
                <div className='question__btn-right'>right</div>
            </div>
        );
    }
}