import React, {Component} from 'react';
import SearchForm from './Components/SearchForm';
import MainNav from './Components/MainNav';
import Results from './Components/Results';
import NoResults from './Components/NoResults';
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
    console.log('App has been mounted.');
    this.getRecent();
  }

  getRecent = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&format=json&nojsoncallback=1&api_key=${apiKey}&per_page=25`)
      .then(response => {
        this.setState({
          photos: response.data.photos,
          loading: false
        });
        // console.dir(response.data);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div class="container">

        <SearchForm />

        <MainNav />

        <Results />

        {// <NoResults />
        }

      </div>
    );
  }
}
