import React from 'react';
import {
  Router,
  Scene
} from 'react-native-router-flux';
import DreamLister from './components/DreamLister/DreamLister';
import Login from './components/Login/Login';
class RouterComponent = () => {
return(
    <Router>
      <Scene key="navToLogin" component={Login}/>
      <Scene key="navToDreamLister" component={DreamLister}/>
    </Router>
  );
}
export default RouterComponent;
