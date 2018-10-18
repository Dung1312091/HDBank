import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import Header from "../components/header";
import MenuSideBar from "../components/Home/home";

import createStore from "../store";
//ngProgress
import NProgress from "nprogress";
import Router from "next/router";
//google Analytics
import { initGA, logPageView } from "../utils/analytics";
//mutilanguage
import { IntlProvider, addLocaleData } from "react-intl";
import locale_en from "react-intl/locale-data/en";
import locale_ja from "react-intl/locale-data/ja";
import locale_vi from "react-intl/locale-data/vi";
import messages_ja from "../translations/ja.json";
import messages_en from "../translations/en.json";
import messages_vi from "../translations/vi.json";

const messages = {
  ja: messages_ja,
  en: messages_en,
  vi: messages_vi
};
addLocaleData([...locale_en, ...locale_ja, ...locale_vi]);
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }
  componentDidMount() {
    initGA(process.env.NODE_ENV);
    logPageView(process.env.NODE_ENV);
    Router.router.events.on("routeChangeComplete", logPageView);
  }
  render() {
    const { Component, pageProps, store } = this.props;
    const language = this.props.router.query.lang || "vi";
    return (
      <Container>
        <IntlProvider locale={language} messages={messages[language]}>
          <Provider store={store}>
            <React.Fragment>
              <Header />
              <MenuSideBar />
              <Component {...pageProps} />
            </React.Fragment>
          </Provider>
        </IntlProvider>
      </Container>
    );
  }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(MyApp));
