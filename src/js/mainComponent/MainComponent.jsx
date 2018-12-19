import React from 'react';
// import PropTypes from 'prop-types';
import './mainComponent.less';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import ContextConfig from '../context/context.jsx';
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
import Navigator from '../navigator/Navigator.jsx';
import CreatePortal from '../createPortal/CreatePortal.jsx';
import ContextApi from '../contextApi/ContextApi.jsx';
import PropTypes from '../propTypes/PropTypesComponent.jsx';
// import HighOrderComponent from '../highOrderComponent/HighOrderComponent.jsx';
import Login from '../login/Login.jsx';
import colors from '../colors/colors';
import ContextColors from '../context/context.jsx';
// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory();

const HighOrderComponent = React.lazy(() => import('../highOrderComponent/HighOrderComponent.jsx'));

export default class MainComponent extends React.Component {
    static contextType = ContextConfig;

    state = {
        isLogged: false,
    };

    toggleLoggedIn = () => {
        this.setState(() => ({isLogged: true}));
    };

    toggleLoggedOut = () => {
        this.setState(() => ({isLogged: false}));
    };

    render() {
        const { isLogged } = this.state;
        return (
            <React.StrictMode>
            <div className="page-wrapper">
                <header className="header page-wrapper__header">
                    {this.context.modules.header.isActive && <Header/>}
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
                </main>
                <footer className="footer page-wrapper__footer">
                    {this.context.modules.header.isActive && <Footer/>}
                </footer>
            </div>
            </React.StrictMode>
        );
    }
}
