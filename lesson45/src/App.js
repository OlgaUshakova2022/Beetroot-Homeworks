import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Banner from './components/Banner/banner';
import Blog from './components/Blog/blog';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Blog></Blog>
    </div>
  );
}

export default App;
