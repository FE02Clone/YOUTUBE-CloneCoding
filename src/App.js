import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import VideoDetail from "./pages/VideoDetail";
import NotFound from "./pages/NotFound";
import Videos from "./components/Videos";
// import SearchHeader from "./components/SearchHeader";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Video/Detail/:videoId" element={<VideoDetail />} />
          <Route path="videos/:keyword" element={<Videos />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
