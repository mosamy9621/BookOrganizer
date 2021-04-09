import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
class SearchBook extends Component {
    state = {
        strValue: '',
        arrSearchResult: [],
        boolLoader : false 
    }
    callSearchAPI = async (evt) => {
        let arrData = [];
        let strQuery = evt.target.value;
        this.setState({
            strValue: strQuery,
            boolLoader : true ,
        });
        let { Search } = this.props;

        if (strQuery !== '') {
            await Search(strQuery).then(arrBook => {
                arrData = arrBook;

            })
        }
        if (arrData.error !== undefined) {
            arrData = [];
        }
        this.setState({
            arrSearchResult: arrData,
            boolLoader : false 
        })
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" >Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
                        <input type="text" placeholder="Search by title or author" value={this.state.strValue} onChange={this.callSearchAPI} />

                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.boolLoader &&
                        <div className="loader-parent">
                            <div className="loader"></div>

                        </div>}
                        { this.state.strValue !== '' && this.state.arrSearchResult.length === 0 && (
                                <h3>No data found matching that search input , try something else.</h3>

                        )}
                    <ol className="books-grid">
                        {
                            this.state.arrSearchResult.map((objBook) => (
                                <li key={objBook.id}>
                                    <Book Book={objBook}  />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}
export default SearchBook;