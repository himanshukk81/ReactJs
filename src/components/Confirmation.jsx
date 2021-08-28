import React from 'react';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const styles = {
  display: 'block',
  width: '80%',
  margin: '10%',
  fontSize: '30px',
  borderRadius: '4em',
  paddingLeft: '20px',
  color: 'orange',
};

const ConfirmationPage = ({  }) => (
  <div>
    <div>Confirmation page</div>

    <a href="/success" >Next</a>
  </div>
);

// const mapDispatchToProps = {
  
// };

const Confirmation = connect(
  null,
  // mapDispatchToProps,
)(ConfirmationPage);


export default Confirmation;
