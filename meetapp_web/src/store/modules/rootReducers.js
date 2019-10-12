import { combineReducers } from 'redux';
import Auth from './Auth/reducer';
import User from './User/reducer';
import Meetup from './Meetup/reducer';

export default combineReducers({ Auth, User, Meetup });
