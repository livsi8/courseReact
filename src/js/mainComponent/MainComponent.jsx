import React from 'react';
import './mainComponent.less';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import ContextConfig from '../context/context.jsx';
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
import Navigator from '../navigator/Navigator.jsx';
import CreatePortal from '../createPortal/CreatePortal.jsx';
import ContextApi from '../contextApi/ContextApi.jsx';
import PropTypes from '../propTypes/PropTypesComponent.jsx';
import Login from '../login/Login.jsx';
import colors from '../colors/colors';
import ContextColors from '../context/context.jsx';
import resource from '../lang/languages.js';
import Modal from '../../js/createPortal/components/modal/Modal.jsx';
import SwitchToggle from "react-switch";
import Question from '../question/question.jsx';
import testQuestions from '../TestQuestions/testQuestions';

export default class MainComponent extends React.Component {
    static contextType = ContextConfig;

    state = {
        isLogged: false,
        lang: 'ru',
        isOpenModalSettings: false,
        isLoggedIn: false,
        isShowHelp: false,
    };

    checkIsLoggedIn =()=>{
        this.setState(state => ({ isLoggedIn: !state.isLoggedIn})); //TODO: получить ответ от базы
    }

    componentDidMount =()=> {
        this.checkIsLoggedIn();
    };

    toggleLoggedIn = () => {
        this.setState(() => ({isLogged: true}));
    };

    toggleLoggedOut = () => {
        this.setState(() => ({isLogged: false}));
    };

    toggleModalSettings =()=> {
        this.setState(state => ({ isOpenModalSettings: !state.isOpenModalSettings}));
    };

    toggleLang =()=> {
        this.setState(state => ({ lang: (state.lang === 'ru' ? 'en' : "ru")}));
    };

    toggleHelp =()=> {
        this.setState(state => ({ isShowHelp: !state.isShowHelp}));
    };

    getRouteDivs =(questions, lang)=>{
        let result = [];
        for (let ind in questions){
            if (!parseInt(ind)) {
                result.push(<Route path={'/'} component={() => <Question lang={ lang } questionNumber={ parseInt(ind) } />} exact/>)
            } else {
                result.push(<Route path={'/question-' + ind} component={() => <Question lang={ lang } questionNumber={ parseInt(ind) } />} exact/>)
            }
        }
        return result;
    }

    render() {
        const { isLogged, isOpenModalSettings, lang, isLoggedIn, isShowHelp } = this.state;
        const { toggleModalSettings, toggleLang, toggleHelp, getRouteDivs } = this;
        const getRouteDiv = getRouteDivs(testQuestions[lang], lang);

        return (
            <React.StrictMode>
            <div className="page-wrapper">
                <header className="header page-wrapper__header">
                    {this.context.modules.header.isActive && <Header toggleModalSettings={toggleModalSettings}/>}
                </header>
                <main className="content page-wrapper__content">
                    <BrowserRouter>
                        <ContextColors.Provider value={colors}>
                            <Navigator lang={lang}/>
                            <Switch>
                                { getRouteDiv }
                            </Switch>
                        </ContextColors.Provider>
                    </BrowserRouter>

                    {isOpenModalSettings &&
                    <Modal onClose={toggleModalSettings}
                           modalClass={'Settings'}
                           modalTitle={resource[lang]['settings']}
                           closeButtonName={resource[lang]['close']}>
                        <div className='modal-Settings__toggler-langs'>
                            <div className='modal-Settings__colon-1'>
                                {resource[lang]['language'] + ':'}
                            </div>
                            <div className='modal-Settings__colon-2'>
                                <div>RU</div>
                                <SwitchToggle
                                    onChange={toggleLang}
                                    uncheckedIcon ={false}
                                    checkedIcon ={false}
                                    offColor={'#080'}
                                    onColor={'#080'}
                                    disabled={false}
                                    checked={lang === 'en'}
                                    className="modal-Settings__react-switch"
                                    id="switchLang"
                                />
                                <div>EN</div>
                            </div>
                        </div>
                        <div className='modal-Settings__toggler-helps'>
                            <div className='modal-Settings__colon-1'>
                                {resource[lang]['help'] + ':'}
                            </div>
                            <div className='modal-Settings__colon-2'>
                                <SwitchToggle
                                    onChange={toggleHelp}
                                    disabled={!isLoggedIn}
                                    checked={isShowHelp}
                                    className="modal-Settings__switch-help"
                                    id="switchHelp"
                                />
                            </div>
                        </div>
                    </Modal>}
                </main>
                <footer className="footer page-wrapper__footer">
                    {this.context.modules.header.isActive && <Footer/>}
                </footer>
            </div>
            </React.StrictMode>
        );
    }
}
