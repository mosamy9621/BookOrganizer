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
  /**
   * @description : this function is called when component is about to render , it gets all the books attached to current user
   */
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      books.forEach(objBook => {
        this.objBookMapper[objBook.id] = objBook.shelf;
      })
      this.setState({ arrBook: books });
    })
  };
  /**
   * @description : this function is handleing the effect that happens after updating the book from shelf to shelf
   * @param {Object} objBook 
   */
  afterUpdate = (objBook) => {
    let arrNewData = this.state.arrBook;
    arrNewData = this.state.arrBook.filter((book) => book.id !== objBook.id);
    arrNewData.push(objBook);
    this.objBookMapper[objBook.id] = objBook.shelf;
    this.setState({ arrBook: arrNewData });
  }
  /**
   * @description : This function is responsible for rendering the component. 
   * @returns : JSX to the component to be rendered.
   */
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBook onBookUpdate={this.afterUpdate} objBookMapper={this.objBookMapper} />
        )}>
        </Route>
        <Route exact path="/" render={() => (
          <ListBook arrAllBook={this.state.arrBook} onBookUpdate={this.afterUpdate} />
        )}>
        </Route>
      </div>
    );
  }
}

export default BooksApp
