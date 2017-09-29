import React, { Component } from 'react';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;