/*jshint esversion: 6 */
import React, {Component} from 'react';
import SearchForm from './Components/SearchForm';
import MainNav from './Components/MainNav';
import Results from './Components/Results';
import PageNotFound from './Components/PageNotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
        this.setState({
          photos: response.data.photos,
          loading: false
        });
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
      <BrowserRouter>
        <div className="container">

          <SearchForm onSearch={this.performSearch} history={this.props.history}/>

          <MainNav />

          <div className="photo-container">
            <h2>Results</h2>
            <Switch>
              <Route exact path="/" render={() => <Results data={this.state.photos} loading={this.state.loading}/>}/>
              <Route path="/cats" render={() => <Results data={this.state.photos} handleSearch={this.performSearch('cats')} loading={this.state.loading}/> }/>
              <Route path="/dogs" render={() => <Results data={this.state.photos} handleSearch={this.performSearch('dogs')} loading={this.state.loading}/> }/>
              <Route path="/computers" render={() => <Results data={this.state.photos} handleSearch={this.performSearch('computers')} loading={this.state.loading}/> }/>
              <Route path="/search" render={() => <Results data={this.state.photos} loading={this.state.loading}/> }/>
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
