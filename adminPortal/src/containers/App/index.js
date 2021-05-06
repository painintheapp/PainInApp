import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import AppLocale from "lngProvider";
import { IntlProvider } from "react-intl";
import MainApp from "./MainApp";
import LoginPage from "../../routes/Auth/login";
 import SignUp from "../../routes/Auth/phoneNumber";
import { setInitUrl } from "redux/actions/Auth";
import SetNewPassword from '../../routes/Auth/setNewPassword'



const RestrictedRoute = ({ component: Component, location, token, ...rest }) =>
    <Route
        {...rest}
        render={props =>
            token
                ? <Component {...props} />
                : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                />}
    />;


const App = () => {

    const dispatch = useDispatch();
    const { token, initURL } = useSelector(({ auth }) => auth);
    const { locale } = useSelector(({ settings }) => settings);

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    const currentAppLocale = AppLocale[locale.locale];
    useEffect(() => {
        let link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = "/css/style.css";
        document.body.appendChild(link);
    });

    useEffect(() => {
        if (initURL === '') {
            dispatch(setInitUrl(location.pathname));
        }

    }, [dispatch, initURL, location.pathname, location.search]);


    useEffect(() => {
        if (location.pathname === '/') {
            if (token === null) {
                history.push('/login');
            } else if (initURL === '' || initURL === '/' || initURL === '/home') {
                history.push('/login');
            } else {
                history.push(initURL);
            }
        }
    }, [token, initURL, location, history]);


    return (
        <IntlProvider
        locale={currentAppLocale.locale}
                messages={currentAppLocale.messages}
        >
            <Switch>

                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/signUp' component={SignUp} />
                <Route exact path='/setNewPassword/:token' component={SetNewPassword} />

                
                <RestrictedRoute path={`${match.url}`} token={token} location={location}
                    component={MainApp} />
            </Switch>
        </IntlProvider>
    )
};

export default memo(App);
