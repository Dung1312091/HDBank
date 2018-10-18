import { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import Link from "next/link";
import "./style.scss";
class MenuSideBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className="menu">
            <Link href="/">
              <a>
                <FormattedMessage
                  id="app.personal"
                  defaultMessage="aaaaaaaaaaaaaaaaa"
                  description="Welcome header on app main page"
                  values={{ what: "react-intl" }}
                />
              </a>
            </Link>
          </li>
          <li className="menu">
            <Link href="/?site=enterprise" as="/enterprise">
              <a>
                <FormattedMessage
                  id="app.enterprise"
                  defaultMessage="aaaaaaaaaaaaaaaaa"
                  description="Welcome header on app main page"
                  values={{ what: "react-intl" }}
                />
              </a>
            </Link>
          </li>
          <li className="menu">
            <Link href="/?site=preferred-customers" as="/referred-customers">
              <a>
                <FormattedMessage
                  id="app.preferred"
                  defaultMessage="aaaaaaaaaaaaaaaaa"
                  description="Welcome header on app main page"
                  values={{ what: "react-intl" }}
                />
              </a>
            </Link>
          </li>
          <li className="menu">
            <Link href="/?site=investors" as="/investors">
              <a>
                <FormattedMessage
                  id="app.investors"
                  defaultMessage="aaaaaaaaaaaaaaaaa"
                  description="Welcome header on app main page"
                  values={{ what: "react-intl" }}
                />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default injectIntl(MenuSideBar);
