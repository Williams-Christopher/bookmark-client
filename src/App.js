import React, { Component } from 'react';
import './App.css';

import AddBookmark from './addBookmark/addBookmark';
import BookmarkApp from './bookmarkApp/bookmarkApp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      showAddForm: false,
    };
  }

  componentDidMount() {
    const url = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
    const options = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer $2a$10$KBSsfyH5vTt2nnSblvJStecO4Yq3UiE/X7qtDEgXIuAM1NbUcEfdm',
        'Content-Type': 'application/json',
      }
    };
    
    fetch(url, options)
    .then(response => {
      if(!response.ok) {
        throw new Error('Something went wrong. Please try again later.')
      }
      return response;
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        bookmarks: data,
        error: null,
      });
    })
    .catch(err => {
      this.setState({
        error: err.message,
      });
    });
  }

  setShowAddForm(show) {
    this.setState({
      showAddForm: show,
    });
  }

  addBookmark(bookmark) {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark],
      showAddForm: false,
    });
  }

  render() {
    const page = this.state.showAddForm
            ? <AddBookmark showForm={show => this.setShowAddForm(show)} handleAdd={bookmark => this.addBookmark(bookmark)} />
            : <BookmarkApp bookmarks={this.state.bookmarks} showForm={show => this.setShowAddForm(show)} />

    return (
      <div className="App">
        {page}        
      </div>
    );
  }
}

export default App;
