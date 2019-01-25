import React, { Component } from "react";
import "./App.css";
import { Layout, Content} from "react-mdl";
import LandingPage from "./components/landingpage";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Content>
            <LandingPage />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
