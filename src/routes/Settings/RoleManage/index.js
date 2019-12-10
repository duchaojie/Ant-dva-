import React from 'react';
import { Button } from 'antd';


class Welcome extends React.PureComponent {

  render() {
    return (
      <div>
        <h2>WELCOME</h2>;
        <Button onClick={this.dou}>点击一次</Button>
      </div>
    )

  }
}

export default Welcome;
