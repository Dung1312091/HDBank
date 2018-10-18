import React from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { loadFakeDataUsers, loadFakeDataPosts } from "./action";
import { withRouter } from "next/router";
class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    if (asPath === "/") {
      store.dispatch(loadFakeDataUsers());
    } else if (asPath === "/enterprise") {
      store.dispatch(loadFakeDataPosts());
    } else {
      store.dispatch(loadFakeDataUsers());
    }
    return { isServer };
  }

  render() {
    const { placeholderData } = this.props;
    return (
      <div>
        <h1>
          <FormattedMessage
            id="app.title"
            defaultMessage="aaaaaaaaaaaaaaaaa"
            description="Welcome header on app main page"
            values={{ what: "react-intl" }}
          />
        </h1>
        <img src="/static/image/avt.jpg" />
        {placeholderData && (
          <pre>
            <code>{JSON.stringify(placeholderData, null, 2)}</code>
          </pre>
        )}
        }
      </div>
    );
  }
}
const mapStateToProp = state => {
  return {
    placeholderData: state.homeReducer.placeholderData
  };
};
export default withRouter(injectIntl(connect(mapStateToProp)(Index)));
