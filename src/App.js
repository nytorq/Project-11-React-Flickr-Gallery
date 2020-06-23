import React, {Component} from 'react';
import SearchForm from './Components/SearchForm';
import MainNav from './Components/MainNav';
import Results from './Components/Results';
import './App.css';
import axios from 'axios';
import apiKey from './config.js';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount() {
    this.getRecent();
  }

  getRecent = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&format=json&nojsoncallback=1&api_key=${apiKey}&per_page=24`)
      .then(response => {
        // console.log("The following is the response from the server:")
        // console.dir(response);
        this.setState({
          photos: response.data.photos,
          loading: false
        });
        // console.log(this.state.photos.photo[0].id)
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=${query}&format=json&nojsoncallback=1&api_key=${apiKey}&per_page=24`)
      .then(response => {
        this.setState({
          photos: response.data.photos,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div class="container">

        <SearchForm onSearch={this.performSearch}/>

        <MainNav />

        <div class="photo-container">
        <h2>Results</h2>
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <Results data={this.state.photos}/>
          }
        </div>



      </div>
    );
  }
}
