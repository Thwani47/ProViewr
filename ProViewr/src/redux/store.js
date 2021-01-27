import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import app from './appSlice';

const reducer = combineReducers({ app });

const store = configureStore({ reducer });

export default store;
