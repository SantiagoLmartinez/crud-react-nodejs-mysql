import logo from './logo.svg';
import './App.css';

//importamos componentes
import CompShowBlogs from './blog/ShowBlog';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>App con React</h1>
        {/* <button className='btn btn-primary'><i className="fa-solid fa-blog"></i></button> */}
      </header>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowBlogs/>}/>          
        </Routes>
      </BrowserRouter>
      {/* <CompShowBlogs></CompShowBlogs> */}
    </div>
  );
}

export default App;
