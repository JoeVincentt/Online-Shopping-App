import React from "react";
import { UserProfileContext } from "./UserProfileContext";

export default function withContext(Component) {
  return function contextComponent(props) {
    return (
      <UserProfileContext.Consumer>
        {context => <Component {...props} context={context} />}
      </UserProfileContext.Consumer>
    );
  };
}
