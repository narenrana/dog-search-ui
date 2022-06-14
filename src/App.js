import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Search from "./search/Search";
import Footer from "./footer/Footer";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./dashboard/components";

const sections = [{ title: "Home", url: "/home" }];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />{" "}
      <Router>
        <Container maxWidth="lg">
          <Search title="Cart" sections={sections} />

          <Switch>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Container>

        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </Router>
    </ThemeProvider>
  );
}
