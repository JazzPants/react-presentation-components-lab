import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <React.Fragment>
    <SimpleComponent />
    <SimplerComponent handleClick={() => console.log("hello world")} />
  </React.Fragment>,
  document.getElementById('root')
);
//4:50 AM 10/01/2022 added react fragment to parent

//if we wanted a more complex function, we could use this.handleClick and right the function
//in the parent container component (which may contain state)
//can also keep state in that parent container component which makes debugging/making changes easier

//if you can't make the stateless functional component work with the "container-held" state
//then change it to a full React Component with state

//Start from smallest blocks/components then scale up