import React from 'react'
import { Route } from 'react-router-dom';
 import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBook from './ListBook';
import SearchBook from './SearchBook';
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    arrBook: [],
  }
  componentDidMount() {
    BooksAPI.getAll().then(books =>{
      this.setState({arrBook : books})
    })
  }
  submitSearch = (strQuery)=>{
      return BooksAPI.search(strQuery);
  }
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBook  Search ={this.submitSearch} />
        )}>
        </Route>
        <Route exact path="/" render={() => (
          <ListBook  arrAllBooks={this.state.arrBook}/>
        )}>

        </Route>
      </div>
    )
  }
}

export default BooksApp
