import React from 'react';
import { createStackNavigator, StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import NewAccountForm from './components/NewAccountForm';
import CreateBook from './components/CreateBook';
import Main from './components/Main';
import BookList from './components/BookList';
import BookDetail from "./components/BookDetail";


const LoginStack = createStackNavigator({
  LoginForm,
  NewAccountForm,
}, {
    initialRouteName: 'LoginForm',
  }
);

const MainStack = createStackNavigator({
  Main,
  CreateBook,
  BookList,
  BookDetail
}, {
    initialRouteName: 'Main',
  }
);

const Navigator = StackNavigator({
  Login: LoginStack,
  BookStore: MainStack,
}, {
  initialRouteName: 'BookStore',
  headerMode: 'none'
});

export default Navigator;


