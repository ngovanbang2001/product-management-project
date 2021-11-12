import React from "react";
import { Link, Route } from "react-router-dom";

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        return (
          <li className={`nav-item ${match ? "active" : ""}`}>
            <Link className="nav-link" to={to} exact={activeOnlyWhenExact}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};
const sites = [
  { label: "Trang chủ", to: "/", exact: true },
  { label: "Quản lý công việc", to: "/product", exact: false },
  { label: "Thêm công việc", to: "/product/add", exact: false },
];
class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/#">
          Call API
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {sites.map((site, index) => (
              <MenuLink
                key={index}
                activeOnlyWhenExact={site.exact}
                to={site.to}
                label={site.label}
              />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
