
import './App.css';
import Row from "./Row"
import requests from './requests';
import Banner from './Banner';
import Nav from "./Nav"

function App() {
  return (
    <div className="app">
      <Nav />
      <h1></h1>
      <Banner />
      <Row title="NETFLIX ORIGINALS" isLargeRow={true} fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Movies"  fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated"  fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies"  fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies"  fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies"  fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Documentaries"  fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;