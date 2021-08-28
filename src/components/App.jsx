import React from 'react';
import Personal from './PersonalInfo';
import Office from './OfficeDetail';

import Confirmation from './Confirmation';

import Success from './SuccessPage';


import ProgressBarInfo from '../containers/ProgressBarInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
let App = ({ }) => {
  return (
    <div>
      <ProgressBarInfo />
      <Personal />
      
    </div>
  );
}

// const mapStateToProps = (state, ownProps) => ({
//   id: ownProps.match.params[0],
//   callDone: state.reducer.callDone,
// });


// const mapDispatchToProps = dispatch => ({
//   getByUrl: (name) => { dispatch({type:'GET_TEMP',name}); },
// });

// App = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(App);



export default App;
