import { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
// import Link from "next/link";
import { Link } from "../../routes";
import "./style.scss";
class MenuSideBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className="menu">
            <Link route="home">
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
            <Link route="enterprise">
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
            <Link route="preferred-customers">
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
            <Link route="investors">
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
          <li className="menu">
            <Link route="/post/12">
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
          {/* <li className="menu">
            <Link route="home">
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
          <li className="menu">
            <Link route="enterprise">
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
          <li className="menu">
            <Link route="/post/12">
              <a>
                <FormattedMessage
                  id="app.investors"
                  defaultMessage="aaaaaaaaaaaaaaaaa"
                  description="Welcome header on app main page"
                  values={{ what: "react-intl" }}
                />
              </a>
            </Link>
            <Link route="/post/34">
              <a>
                <FormattedMessage
                  id="app.investors"
                  defaultMessage="aaaaaaaaaaaaaaaaa"
                  description="Welcome header on app main page"
                  values={{ what: "react-intl" }}
                />
              </a>
            </Link> */}
          {/* </li> */}
        </ul>
      </div>
    );
  }
}
export default injectIntl(MenuSideBar);
