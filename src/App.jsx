import React, { Component } from "react";
import "./App.css";
import { Layout, Navigation, Drawer, Content } from "react-mdl";
import LandingPage from "./components/landingpage";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          {/* Side panel navigation */}
          {/* <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "#000" }} to="/">
                Menu
              </Link>
            }
          >
            </Drawer> */}
          <Content>
            <LandingPage />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
