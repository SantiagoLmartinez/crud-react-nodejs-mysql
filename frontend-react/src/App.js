import logo from './logo.svg';
import './App.css';

//importamos componentes
import CompShowBlogs from './blog/ShowBlog';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';
import CompNavbar from './navbar/Navbar';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <CompNavbar></CompNavbar> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Crud con React</h1>
        {/* <button className='btn btn-primary'><i className="fa-solid fa-blog"></i></button> */}
      </header>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowBlogs/>}/>          
          <Route path='/create' element={<CompCreateBlog/>}/> 
          <Route path='/edit/:id' element={<CompEditBlog/>}/>          
        

        </Routes>
      </BrowserRouter>
      {/* <CompShowBlogs></CompShowBlogs> */}
    </div>
  );
}

export default App;
