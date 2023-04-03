import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Diaries from "./components/Diaries";
import Header from "./components/Header";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import Add from "./components/Add";
import Profile from "./components/Profile";
import DiaryUpdate from "./components/DiaryUpdate";
import { useEffect } from "react";
import authActions from "./redux";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(localStorage.getItem("userId")){
      dispatch(authActions.login());
    }
  },[dispatch])
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
          {isLoggedIn && (
            <>
              <Route path="/add" element={<Add />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/posts/:id" element={<DiaryUpdate />} />
            </>
          )}
        </Routes>
      </section>
    </div>
  );
}

export default App;
