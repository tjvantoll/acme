/*
  // Source: https://gist.github.com/nathansmith/521059b2221c8070d0b703691e13c9cf

  // Used like so…
  <Render if={isUserAuthenticated}>
    <p>
      Super secret UI.
    </p>
  </Render>
*/

import React from 'react';

const Render = (props: any) => {
  let ui = null;

  if (props.if) {
    ui = (
      <>
        {props.children}
      </>
    );
  }

  return ui;
}

export default Render;
