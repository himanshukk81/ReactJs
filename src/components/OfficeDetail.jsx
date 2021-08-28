import React from 'react';
import { connect } from 'react-redux';
// import { setBuildingName } from '../actions';

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

const OfficeDetail = ({  }) => (
  <div>
    <input style={styles} onChange={(evt) => { }} type="text" placeholder="Enter Building" />
    
    <a href="/confirmation" >Next</a>
  </div>
);

// const mapDispatchToProps = {
//     setBuildingName
// };

const Office = connect(
  null,
  // mapDispatchToProps,
)(OfficeDetail);


export default Office;
