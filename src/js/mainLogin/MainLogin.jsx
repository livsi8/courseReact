import React from 'react';
import './mainLogin.less';
import Header from '../header/Header.jsx';
import resource from '../lang/languages.js';
import CustomInput from '../libraryComponents/input/customInput/CustomInput.jsx';
import CustomButton from '../libraryComponents/buttons/customButton/CustomButton.jsx';
import Footer from '../footer/Footer.jsx';
import ContextConfig from '../context/context.jsx';
import Modal from '../../js/createPortal/components/modal/Modal.jsx';
import SwitchToggle from "react-switch";
import ContextApi from '../contextApi/ContextApi.jsx';

const HighOrderComponent = React.lazy(() => import('../highOrderComponent/HighOrderComponent.jsx'));

export default class MainLogin extends React.Component {
    static contextType = ContextConfig;

    state = {
        isLogged: false,
        lang: 'ru',
        isOpenModalSettings: false,
    };

    callbackLogIn = () => {
        const login = this.inputLoginSelf.current.value;
        const pass = this.inputPassSelf.current.value;
        try {
            this.setSQL({
                login: login,
                pass: pass,
            })
        } catch (e) {
            console.log('setSQL Error');
        }
    };

    anonymousLogIn = () => {
        location.href = 'http://localhost:8080/';
    };

    setSQL =(data)=>{
        console.log('setSQL');
    };

    getSQL =(data)=>{

    };

    changeLang =(language)=>{
        if(lang === 'ru' || lang === 'en') this.setState({ lang: language });
    };

    changeLogin = () => {
        this.changeInput(null, this.inputLoginSelf.current, this.inputLoginHelp.current, 'helpLogin');
    };

    changePass = () => {
        this.changeInput(null, this.inputPassSelf.current, this.inputPassHelp.current, 'helpPass', 8);
    };

    setFocusAtLogin = () => {
        this.changeInput(true, this.inputLoginSelf.current, this.inputLoginHelp.current, 'helpLogin');
    };

    setFocusAtPass = () => {
        this.changeInput(true, this.inputPassSelf.current, this.inputPassHelp.current, 'helpPass', 8);
    };

    changeInput =(isSetFocus, inputSelf, inputHelp, strHelp, simbolLength = 3)=> {
        const { lang } = this.state;
        let btnLogin = this.btnLogin.current;
        if (isSetFocus) inputSelf.focus();
        if (inputSelf.value.length < simbolLength) {
            inputHelp.textContent = resource[lang][strHelp];
            inputSelf.style.border = '1px solid red';
        } else {
            inputHelp.textContent = resource[lang]['allRight'];
            inputSelf.style.border = '1px solid grey';
        }
        if (this.inputLoginSelf.current.value.length >= 3 &&
            this.inputPassSelf.current.value.length >= 8) {
            btnLogin.disabled = false;
        } else {
            btnLogin.disabled = true;
        }
    };

    componentDidMount =()=> {
        this.btnLogin.current.disabled = true;
    };

    inputLoginHelp = React.createRef();
    inputLoginSelf = React.createRef();
    inputPassHelp = React.createRef();
    inputPassSelf = React.createRef();
    btnLogin = React.createRef();

    toggleModalSettings =()=> {
        this.setState(state => ({ isOpenModalSettings: !state.isOpenModalSettings}));
    };

    toggleLang =()=> {
        this.setState(state => ({ lang: (state.lang === 'ru' ? 'en' : "ru")}));
    };

    toggleHelp =()=> {
        // this.setState(state => ({ isShowHelp: !state.isShowHelp}));
        console.log('toggleHelp-1');
    };

    render() {
        const { lang, isOpenModalSettings } = this.state;
        const { changeLogin, setFocusAtLogin, changePass, setFocusAtPass, callbackLogIn,
            anonymousLogIn, toggleModalSettings, toggleLang, toggleHelp,
            inputLoginSelf, inputLoginHelp, inputPassSelf, inputPassHelp, btnLogin } = this;
        return (
            <React.StrictMode>
            <div className="page-wrapper">
                <header className="header page-wrapper__header">
                    {this.context.modules.header.isActive && <Header
                        toggleModalSettings={toggleModalSettings}
                        resource={resource[lang]}
                    />}
                </header>
                <main className="content page-wrapper__content">
                    <div className='content__logging'>
                        <div className='content__logging-column'>
                            <CustomInput
                                placeholder={resource[lang]['placeholderLogin']}
                                loginLabel={resource[lang]['login']}
                                className='content__login'
                                onChange={changeLogin}
                                onClick={setFocusAtLogin}
                                inputSelf={inputLoginSelf}
                                inputHelp={inputLoginHelp}
                                loginHelp={resource[lang]['helpInputLogin']}
                            />
                            <CustomInput
                                placeholder={resource[lang]['placeholderPassword']}
                                loginLabel={resource[lang]['password']}
                                type='password'
                                className='content__password'
                                onChange={changePass}
                                onClick={setFocusAtPass}
                                inputSelf={inputPassSelf}
                                inputHelp={inputPassHelp}
                                loginHelp={resource[lang]['helpInputPass']}
                            />
                            <div className='content__logging-row'>
                                <CustomButton name={resource[lang]['letLogin']}
                                              className = {'content__logging-btn'}
                                              btnRef={btnLogin}
                                              callback={callbackLogIn}
                                />
                                <CustomButton name={resource[lang]['continueWithOutLogin']}
                                              className = {'content__logging-btn content__logging-btn-incognito'}
                                              callback={anonymousLogIn}
                                />
                            </div>
                        </div>
                    </div>
                    {isOpenModalSettings &&
                    <Modal onClose={toggleModalSettings}
                           modalClass={'Settings'}
                           modalTitle={resource[lang]['settings']}
                           closeButtonName={'Close'}>
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
                                    disabled={false}
                                    checked={false}
                                    className="modal-Settings__switch-help"
                                    id="switchHelp"
                                />
                            </div>
                        </div>
                    </Modal>}
                </main>
                <footer className="footer page-wrapper__footer">
                    {this.context.modules.footer.isActive && <Footer/>}
                </footer>
            </div>
            </React.StrictMode>
        );
    }
}
