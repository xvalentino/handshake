import React, { Component } from "react";
import { Router } from "@reach/router";
import AllAlarms from "./pages/AllAlarms";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "mineral-ui/themes";

const client = new ApolloClient({
  uri: "http://localhost:60000/simple/v1/cjtgkw9dq000401182eh8dd05"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider>
          <Router>
            <AllAlarms path="/" />
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
