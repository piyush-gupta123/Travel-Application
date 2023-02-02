import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Diaries from './components/Diaries';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return <div>
    <header>
      <Header />
    </header>
    <section>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/auth' element={<Auth />} ></Route>
        <Route path='/diaries' element={<Diaries />}></Route>
      </Routes>
    </section>
  </div>
}

export default App;
