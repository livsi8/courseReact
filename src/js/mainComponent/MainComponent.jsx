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

    render() {
        const { isLogged, isOpenModalSettings, lang, isLoggedIn, isShowHelp } = this.state;
        const { toggleModalSettings, toggleLang, toggleHelp } = this;


        return (
            <React.StrictMode>
            <div className="page-wrapper">
                <header className="header page-wrapper__header">
                    {this.context.modules.header.isActive && <Header toggleModalSettings={toggleModalSettings}/>}
                </header>
                <main className="content page-wrapper__content">
                    {/*<Router history={history}>*/}
                    <BrowserRouter>
                        <ContextColors.Provider value={colors}>
                            <Navigator/>
                            <Switch>
                                <Route path={'/'} component={() => <Login isLogged={isLogged} callbackLogIn={this.toggleLoggedIn} callbackLogOut={this.toggleLoggedOut}/>} exact/>
                                <Route path={'/createportal'} component={() => (isLogged ? <CreatePortal/> : <Redirect to={'/'}/>)}/>
                                <Route path={'/proptypes'} component={() => (isLogged ? <PropTypes/> : <Redirect to={'/'}/>)}/>
                                <Route path={'/contextapi'} component={() => (isLogged ? <ContextApi/> : <Redirect to={'/'}/>)}/>
                                <Route path={'/hoc'} render={() => (
                                    <React.Suspense fallback={<div>Loading...</div>}>
                                        <HighOrderComponent/>
                                    </React.Suspense>
                                    )}
                                />
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
