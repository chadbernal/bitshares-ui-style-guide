import React from 'react';
import Basic from '../Basic';
import {BodyClassName} from 'bitshares-ui-style-guide';

import './styles.less';

class Dark extends React.Component {

  render() {
    return (
      <BodyClassName className="darkTheme">
        <Basic />
      </BodyClassName>
    );
  }

}

export default Dark;
