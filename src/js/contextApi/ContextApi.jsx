import React from 'react';
// import PropTypes from 'prop-types';
import ShowComponent from './components/showComponent/ShowComponent.jsx';
import './contextApi.less';
// import DataContext from './context.jsx';

export const DataContext = React.createContext();

// class MyProvider extends React.Component {
//     state = {
//        // your state
//     };
//
//     render() {
//         return (
//             <DataContext.Provider value={}>
//                 {this.props.children}
//             </DataContext.Provider>
//         )
//     }
// }

export default class ContextApi extends React.Component {
    text = 'Properties from context';
    value = 2018;
    users = {
        1: {
            name: 'Vasya',
            age: 28,
        },
        2: {
            name: 'Masya',
            age: 23,
        }
    };
    skills = ['JavaScript', 'Java', 'C#', 'HTML', 'CSS'];

    state = {
        isShow: false,
    };

    showProperties = () => {
        this.setState(state => ({ isShow: !state.isShow }));
    };

    render() {
        const {
            text,
            value,
            users,
            skills,
        } = this;

        DataContext.text = text;
        DataContext.value = value;
        DataContext.users = users;
        DataContext.skills = skills;
        DataContext.isShow = this.state.isShow;
        DataContext.showProperties = this.showProperties;

        return (
            <DataContext.Provider value={DataContext}>
                <ShowComponent/>
            </DataContext.Provider>
        );
    }
}
