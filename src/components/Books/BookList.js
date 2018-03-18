import React from 'react'

const BookList = ({ books }) => (
    <div className="row book-list">
    {books.map(book => (
        <div className="col-xs-6 col-sm-3" key={book.id}>
            <div className="thumbnail">
                <img alt="" className="img-responsive" src={book.cover} />
            </div>
        </div>
    ))}
    <span style={{display: books.length === 0 ? 'inline' : 'none'}}>No results!</span>
</div>
)

export default BookList
