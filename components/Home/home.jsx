import { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
// import Link from "next/link";
// import { Link } from "../../routes";
import ActiveLink from "../ActiveLink";
import "./style.scss";
class MenuSideBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className="menu">
            <ActiveLink route="home" href="/">
              <a>
                <FormattedMessage
                  id="app.personal"
                  defaultMessage="aaaaaaaaaaaaaaaaa"
                  description="Welcome header on app main page"
                  values={{ what: "react-intl" }}
                />
              </a>
            </ActiveLink>
          </li>
          <li className="menu">
            <ActiveLink route="enterprise" href="/enterprise">
              <a>
                <FormattedMessage
                  id="app.enterprise"
                  defaultMessage="aaaaaaaaaaaaaaaaa"
                  description="Welcome header on app main page"
                  values={{ what: "react-intl" }}
                />
              </a>
            </ActiveLink>
          </li>
          <li className="menu">
            <ActiveLink route="preferred-customers" href="/preferred-customers">
              <a>
                <FormattedMessage
                  id="app.preferred"
                  defaultMessage="aaaaaaaaaaaaaaaaa"
                  description="Welcome header on app main page"
                  values={{ what: "react-intl" }}
                />
              </a>
            </ActiveLink>
          </li>
          <li className="menu">
            <ActiveLink route="investors" href="/investors">
              <a>
                <FormattedMessage
                  id="app.investors"
                  defaultMessage="aaaaaaaaaaaaaaaaa"
                  description="Welcome header on app main page"
                  values={{ what: "react-intl" }}
                />
              </a>
            </ActiveLink>
          </li>
          <li className="menu">
            <ActiveLink route="/post/12" href="/post/12">
              <a>
                <FormattedMessage
                  id="app.investors"
                  defaultMessage="aaaaaaaaaaaaaaaaa"
                  description="Welcome header on app main page"
                  values={{ what: "react-intl" }}
                />
              </a>
            </ActiveLink>
          </li>
          {/* <li className="menu">
            <ActiveLink href="/homePage" as="/">
              <a>
                <FormattedMessage
                  id="app.investors"
                  defaultMessage="aaaaaaaaaaaaaaaaa"
                  description="Welcome header on app main page"
                  values={{ what: "react-intl" }}
                />
              </a>
            </ActiveLink>
          </li>
          <li className="menu">
            <ActiveLink href="/homePage/?site=enterprise" as="/enterprise">
              <a>
                <FormattedMessage
                  id="app.investors"
                  defaultMessage="aaaaaaaaaaaaaaaaa"
                  description="Welcome header on app main page"
                  values={{ what: "react-intl" }}
                />
              </a>
            </ActiveLink>
          </li>
          <li className="menu">
            <ActiveLink href="/productDetail" as="/products">
              <a>
                <FormattedMessage
                  id="app.investors"
                  defaultMessage="aaaaaaaaaaaaaaaaa"
                  description="Welcome header on app main page"
                  values={{ what: "react-intl" }}
                />
              </a>
            </ActiveLink>
          </li> */}
        </ul>
      </div>
    );
  }
}
export default injectIntl(MenuSideBar);
