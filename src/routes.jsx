import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';


class Test extends React.Component{
    render(){
        return(
            <div>
                test
            </div>
        );
    }
}

class MainPage extends React.Component{
    render(){
        return(
            <div>
                Main Page
            </div>
        );
    }
}
/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    </Route>
);
