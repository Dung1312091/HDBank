import React from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { loadData, tickClock } from "../actions/actionDemo";
import MenuSideBar from "../components/Home/home";
import { withRouter } from "next/router";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));
    if (!store.getState().placeholderData) {
      store.dispatch(loadData());
    }

    return { isServer };
  }

  render() {
    return (
      <div>
        <MenuSideBar />
        <h1>
          <FormattedMessage
            id="app.title"
            defaultMessage="aaaaaaaaaaaaaaaaa"
            description="Welcome header on app main page"
            values={{ what: "react-intl" }}
          />
        </h1>
        <div>
          <span>
            <FormattedMessage
              id="app.home"
              defaultMessage="aaaaaaaaaaaaaaaaa"
              description="Welcome header on app main page"
              values={{ what: "react-intl" }}
            />
          </span>
          <span>
            <FormattedMessage
              id="app.news"
              defaultMessage="aaaaaaaaaaaaaaaaa"
              description="Welcome header on app main page"
              values={{ what: "react-intl" }}
            />
          </span>
          <span>
            <FormattedMessage
              id="app.product"
              defaultMessage="aaaaaaaaaaaaaaaaa"
              description="Welcome header on app main page"
              values={{ what: "react-intl" }}
            />
          </span>
        </div>
      </div>
    );
  }
}
const mapStateToProp = state => {
  return {
    demoReducer: state.demoReducer
  };
};
export default withRouter(injectIntl(connect(mapStateToProp)(Index)));
