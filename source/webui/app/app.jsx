import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import BasePage from 'pages/base.jsx';
import AdminPage from 'pages/admin.jsx';
import OptionsPage from 'pages/optionsPage.jsx';
// import SimulatePage from 'pages/simulatePage.jsx';

/*
    The 'Provider' component makes the Redux available to the connect() calls in the component
    hierarchy below. Normally you can't use connect() without wrapping the root component in
    <Provider> (or you'd have to pass 'store' as a prop to every connect()'ed component.
*/

const App = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={BasePage}>
                <Route path="admin" component={AdminPage}/>
                <Route path="options" component={OptionsPage}/>
                {/*<Route path="simulate" component={SimulatePage}/>*/}
            </Route>
            {/*<Route path="/login" component={Login} />*/}
        </Router>
    </Provider>
);

export default App;

// TODO: style active <Link>s and abstract as in: https://github.com/reactjs/react-router-tutorial/tree/master/lessons/05-active-links