import React from "react";
import { withRouter } from "next/router";

import { FormattedMessage, injectIntl } from "react-intl";
import { tickClock } from "../actions/actionDemo";
class Other extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));
    return { isServer };
  }
  constructor(props) {
    super(props);
    this.state = {
      text: "AAAAAA"
    };
  }
  changeText = () => {
    this.setState({
      text: "BBBB"
    });
  };
  render() {
    console.log("this.props post==>", this.props);
    return (
      <div>
        <h1 className="App-title">
          <FormattedMessage
            id="app.title"
            defaultMessage="aaaaaaaaaaaaaaaaa"
            description="Welcome header on app main page"
            values={{ what: "react-intl" }}
          />
        </h1>
        <div>{this.state.text}</div>
        <button onClick={this.changeText}>ChangeText</button>
      </div>
    );
  }
}

export default withRouter(injectIntl(Other));
