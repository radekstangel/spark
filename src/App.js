// dependencies
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// containers
import Home from "./containers/home";
import Page1 from "./containers/page1";
import Page2 from "./containers/page2";

// components
import Content from "./components/content";
import Footer from "./components/footer";
import Navigation from "./components/navigation";

// global styles
import "./styles/base";
import "./styles/type";

class App extends React.Component {
  constructor() {
    super();
    this.toggleNav = this.toggleNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.state = { navIsOpen: false };
  }

  toggleNav() {
    this.setState({ navIsOpen: !this.state.navIsOpen });
    // no scrolling when off-canvas is open
    document.body.style.overflow = this.state.navIsOpen ? null : "hidden";
  }

  closeNav() {
    this.setState({ navIsOpen: false });
    document.body.style.overflow = null;
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation
            toggleNav={this.toggleNav}
            closeNav={this.closeNav}
            navIsOpen={this.state.navIsOpen}
          />
          <Content
            onClick={this.state.navIsOpen && this.closeNav}
            navIsOpen={this.state.navIsOpen}
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/page1" component={Page1} />
              <Route path="/page2" component={Page2} />
            </Switch>
          </Content>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
