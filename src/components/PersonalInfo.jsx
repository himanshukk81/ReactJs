import React from 'react';
import { connect } from 'react-redux';
// import { setName } from '../actions';
import { browserHistory } from 'react-router';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  NavLink
} from "react-router-dom";

import { withRouter } from 'react-router-dom'
import Button from '../containers/Button';

const styles = {
  display: 'block',
  width: '80%',
  margin: '10%',
  fontSize: '30px',
  borderRadius: '4em',
  paddingLeft: '20px',
  color: 'orange',
};





// const navigateTo = () => history.push('/officedetail');
const PersonalInfo = (props) => (
  <div>
    <input style={styles} onChange={(evt) => { }} type="text" placeholder="Enter Name" />

      <a href="/officedetail">Next </a>
  </div>
);

// const mapDispatchToProps = {
//     setName
// };

const Personal = connect(
  null,
)(PersonalInfo);


export default Personal;
