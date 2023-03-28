import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Diaries from "./components/Diaries";
import Header from "./components/Header";
import Home from "./components/Home";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state=>state.isloggedIn)
  console.log(isLoggedIn);
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/diaries" element={<Diaries />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
