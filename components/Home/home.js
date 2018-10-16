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
            <Link href="#">
              <a>
                <FormattedMessage
                  id="app.menu1"
                  defaultMessage="aaaaaaaaaaaaaaaaa"
                  description="Welcome header on app main page"
                  values={{ what: "react-intl" }}
                />
              </a>
            </Link>
          </li>
          <li className="menu">
            <Link href="#">
              <a>
                <FormattedMessage
                  id="app.menu2"
                  defaultMessage="aaaaaaaaaaaaaaaaa"
                  description="Welcome header on app main page"
                  values={{ what: "react-intl" }}
                />
              </a>
            </Link>
          </li>
          <li className="menu">
            <Link href="#">
              <a>
                <FormattedMessage
                  id="app.menu3"
                  defaultMessage="aaaaaaaaaaaaaaaaa"
                  description="Welcome header on app main page"
                  values={{ what: "react-intl" }}
                />
              </a>
            </Link>
          </li>
          <li className="menu">
            <Link href="#">
              <a>
                <FormattedMessage
                  id="app.menu4"
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
