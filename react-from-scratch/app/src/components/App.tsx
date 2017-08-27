import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Increment, IAction} from "../actions";
import {store} from "../store";

interface AppProps {
    Increment: any,
    counter: number
}

class App extends React.Component<AppProps> {

    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <button onClick={e => this.props.Increment()}>Click Me!</button>
            </div>
        )
    }
}


const mapStatetoProps = state => state;
function mapDispatchtoProps(dispatch) {
    return bindActionCreators({Increment}, dispatch);
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
