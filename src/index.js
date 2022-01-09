import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={() => console.log("hello world")} />
  </div>,
  document.getElementById('root')
);

//if we wanted a more complex function, we could use this.handleClick and right the function
//in the parent container component (which may contain state)
//can also keep state in that parent container component which makes debugging/making changes easier

//if you can't make the stateless functional component work with the "container-held" state
//then change it to a full React Component with state

//Start from smallest blocks/components then scale up