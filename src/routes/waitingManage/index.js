import React, { Fragment } from 'react';
import Form from './Form';
import Add from './Add';

export default class WatingManage extends React.Component {
  render() {
    return (
      <Fragment>
        <Form />
        <div style={{marginTop:'40px'}}> <Add /></div>
      </Fragment>
    )
  }
}
