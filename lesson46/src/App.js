
import './App.css';

import Header from './components/Header/Hader';
import Navbar from './components/Header/Navbar/Navbar';
import PostItem from './components/Poct/Post';
import BlockItem from './components/Header/BlockItem/BlockItem';



function App() {
  return (
    <div className="App">
      <Header />
      
      <div className='sss'>
          <Navbar />
    
         
              <div className="aaa">
                  <BlockItem />
                  <PostItem />
              </div>
      </div>
      </div>
  );
}

export default App;
