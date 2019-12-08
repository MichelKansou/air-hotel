import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from 'Components/Header/Header';
import Home from 'Containers/Home/Home';
import Checkout from 'Containers/Checkout/Checkout';
import CartPage from 'Containers/CartPage/CartPage';
import ConfirmationPage from 'Containers/ConfirmationPage/ConfirmationPage';
import Loader from 'Components/Loader/Loader';
import { fetchRooms } from 'Actions/room';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.fetchRooms().then(() => this.setState({ loading: false }));
    }

    render() {
        const { loading } = this.state;

        if (loading) {
            return <Loader text="Fetching Data" speed={300} />;
        }

        return (
            <Router>
                <div className="app">
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/cart" component={CartPage} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/confirmation" component={ConfirmationPage} />
                        <Route
                            render={() => (
                                <h1 className="not-found">
                                    404 <span role="img">😱</span>
                                </h1>
                            )}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRooms: async () => await dispatch(fetchRooms())
    };
};

export default connect(null, mapDispatchToProps)(App);
