import React from 'react';
import { connect } from 'react-redux';

const styles = {
  display: 'block',
  width: '80%',
  margin: '10%',
  fontSize: '30px',
  borderRadius: '4em',
  paddingLeft: '20px',
  color: 'orange',
};

const SuccessPage = ({  }) => (
  <div>
     <div>Success Page</div>
  </div>
);

// const mapDispatchToProps = {
// };

const Success = connect(
  null,
  // mapDispatchToProps,
)(SuccessPage);


export default Success;
