import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    // debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.items.length}</p>
      </div>
    );
  }
}

//map our store state to our App state
// sidenote: mapStateToProps() method is executed with each change to the store's state.
const mapStateToProps = (state) => {
  // debugger
  return { items: state.items }
  //return value: the value of the props that are added to the App component
}

// we want to connect our App component to a slice of the store's state specified in mapStateToProps()
export default connect(mapStateToProps)(App);

// connect() calls the /mapStateToProps() function each time there is a change in state
//mapStateToProps() receives 'state' as it's first argument
//connect takes whatever the return value is (of mapStateToProps()) and passes it to the component that is in the last set of parenthesis, (in this case, App).
//* the first argument here is the ENTIRE state of the store*