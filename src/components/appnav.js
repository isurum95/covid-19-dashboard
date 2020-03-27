import React, {Component} from 'react';

class Appnav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <h3 className="navtext">COVID-19 DASHBOARD</h3>
                    <p className="navtext">Source: Health Promotion Bureau, Sri Lanka</p>
                </nav>
            </div>
        );
    }
}

export default Appnav;