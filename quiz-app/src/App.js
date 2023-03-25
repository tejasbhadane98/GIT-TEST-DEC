import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage';
import QuizGame from './components/Quiz';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Quiz' element={<QuizGame/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
