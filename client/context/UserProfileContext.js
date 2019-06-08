import React from "react";

//Create context
export const UserProfileContext = React.createContext();
export const UserProfileContextConsumer = UserProfileContext.Consumer;

export class UserProfileContextProvider extends React.Component {
  state = {
    w: "w"
  };
  render() {
    return (
      <UserProfileContext.Provider value={this.state}>
        {this.props.children}
      </UserProfileContext.Provider>
    );
  }
}
