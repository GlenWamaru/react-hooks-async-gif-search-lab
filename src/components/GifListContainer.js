import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
    state = {
      gifs: [],
    };
  
    fetchGifs = (query) => {
      const apiKey = 'BEXP27HdxG1yfMTXBNI1dJcL3ERu3Atn'; // Use the provided API key
      const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;
  
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const gifs = data.data.slice(0, 3); // Get the first 3 gifs from the response
          this.setState({ gifs });
        })
        .catch((error) => {
          console.error('Error fetching GIFs', error);
        });
    }
  
    render() {
      return (
        <div>
          <GifSearch onSubmit={this.fetchGifs} />
          <GifList gifs={this.state.gifs} />
        </div>
      );
    }
}

export default GifListContainer;
