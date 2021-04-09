import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBook from './ListBook';
import SearchBook from './SearchBook';
class BooksApp extends React.Component {
  state = {
    arrBook: [],
  };
  objBookMapper = {};
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      books.forEach(objBook => {
        this.objBookMapper[objBook.id] = objBook.shelf;
      })
      this.setState({ arrBook: books })
    })
  };
  submitSearch = (strQuery) => {
    return BooksAPI.search(strQuery);
  };
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBook Search={this.submitSearch} objBookMapper={this.objBookMapper} />
        )}>
        </Route>
        <Route exact path="/" render={() => (
          <ListBook arrAllBooks={this.state.arrBook} />
        )}>

        </Route>
      </div>
    )
  }
}

export default BooksApp
