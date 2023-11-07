import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import VideoDetail from "./pages/VideoDetail";
import NotFound from "./pages/NotFound";
import VideosSearch from "./pages/VideosSearch";
import { useDispatch } from "react-redux";
import { apiKey } from "./shared/firebase";
import { useEffect } from "react";
import { loginCheckFB } from "./redux/modules/user";

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  useEffect(() => {
    if (is_session) {
      dispatch(loginCheckFB());
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Video/Detail/:videoId" element={<VideoDetail />} />
          <Route
            path="/Video/DetailSearch/:videoId"
            element={<SearchDetail />}
          />
          <Route path="/search/:keyword" element={<VideosSearch />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
