import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "./Provider";
import AppRouter from "./Router";

const App = () => {
    return (
        <AppProvider>
            <Router>
                <AppRouter />
            </Router>
        </AppProvider>
    )
}

export default App;