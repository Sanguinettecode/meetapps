import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import MeetupForm from '../pages/MeetupForm';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/registration" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/details" component={Details} isPrivate />
      <Route path="/meetup" component={MeetupForm} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
