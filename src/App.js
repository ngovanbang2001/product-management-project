import React from "react";
import Menu from "./component/Menu/Menu";

import routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends React.Component {
  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ));
    }
    return result;
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <Router>
            <div>
              <Menu />
              <Switch>{this.showContentMenu(routes)}</Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
