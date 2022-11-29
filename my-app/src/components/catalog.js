// src/components/catalog.js

import React from 'react';
import Card from 'react-bootstrap/Card';

const Catalog = ({ libCatalog }) => {
  return (
    <div>
      <center><h1>Local Library Home</h1></center>  
      <p>Welcome to Local Library a very basic Express website rendered by React</p>
      <p>&nbsp;</p>
      <center><h1>Dynamic Content</h1></center>
      <p>The library has the following record counts:</p>
      <Card>
          <Card.Body>
          <ul>
            <li><Card.Text>Books: {libCatalog.book_count}</Card.Text></li>
            <li><Card.Text>Copies: {libCatalog.book_instance_available_count}</Card.Text></li>
            <li><Card.Text>Copies Available: {libCatalog.book_instance_counte}</Card.Text></li>
            <li><Card.Text>Authors: {libCatalog.genre_count}</Card.Text></li>
            <li><Card.Text>Genres: {libCatalog.book_count}</Card.Text></li>
          </ul> 
          </Card.Body>
        </Card>
    </div>
  )
};

export default Catalog