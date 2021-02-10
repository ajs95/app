import React from "react";
import { Switch, Route } from "react-router-dom";
import {Provider} from "react-dom"
import {ThemeProvider} from "@material-ui/core"
import {useRoutes} from "react-router-dom"
import theme from "./theme"
import MainLayout from "./layout/MainLayout"
import store from "./redux/store"

function App() {
    // const 
    return (
      <Provider store={store}>
        <ThemeProvider>
          <Switch>
            <Route path="/" component={MainLayout} />
          </Switch>
        </ThemeProvider>
      </Provider>
    );
}

export default App;
