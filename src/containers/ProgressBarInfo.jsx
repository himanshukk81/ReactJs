import React from 'react';
import { connect } from 'react-redux';
// import { setBuildingName } from '../actions';

const styles = {
  display: 'block',
  width: '80%',
  margin: '10%',
  fontSize: '30px',
  borderRadius: '4em',
  paddingLeft: '20px',
  color: 'orange',
};

const ProgressBarInfo = ({  }) => (
  <div>
    <div>Progress Bar</div>
  </div>
);

const mapDispatchToProps = {
    
};

const ProgressBar = connect(
  null,
  mapDispatchToProps,
)(ProgressBarInfo);


export default ProgressBar;
