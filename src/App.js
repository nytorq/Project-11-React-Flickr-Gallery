import React from 'react';
import SearchForm from './Components/SearchForm';
import MainNav from './Components/MainNav';
import Results from './Components/Results';
import NoResults from './Components/NoResults';
import './App.css';

function App() {
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

export default App;
