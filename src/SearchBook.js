import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { search } from './BooksAPI';
import Book from './Book';
class SearchBook extends Component {
    state = {
        strValue: '',
        arrSearchResult: [],
        boolLoader: false
    }
    /**
     * @description this is asynchronous function that is responsible for Searching for key that the user enters 
     * @param {object} evt : event of the input
     * 
     */
    Search = async (evt) => {
        let arrData = [];
        let strQuery = evt.target.value;
        this.setState({
            strValue: strQuery,
            boolLoader: true,
        });
        await search(strQuery).then(arrBook => {
            arrData = arrBook;
        });
        if (strQuery === '' || arrData.error !== undefined || !Array.isArray(arrData)) {
            arrData = [];
        }
        this.setState({
            arrSearchResult: arrData,
            boolLoader: false
        });
    }
    /**
     * @description : This function is responsible for rendering the component. 
     * @returns : JSX to the component to be rendered.
     */
    render() {
        const { objBookMapper, onBookUpdate } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.strValue} onChange={this.Search} />
                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.boolLoader &&
                        (<div className="loader-parent">
                            <div className="loader"></div>
                        </div>
                        )
                    }
                    {this.state.strValue !== '' && this.state.arrSearchResult.length === 0 &&
                        (
                            <h3>No data found matching that search input , try something else.</h3>
                        )
                    }
                    <ol className="books-grid">
                        {
                            this.state.arrSearchResult.map((objBook) => {
                                objBook.shelf = objBookMapper[objBook.id] === undefined ? 'none' : objBookMapper[objBook.id];
                                return (
                                    <li key={objBook.id}>
                                        <Book Book={objBook} onBookUpdate={onBookUpdate} />
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        );
    }
}
export default SearchBook;