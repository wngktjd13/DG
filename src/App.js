import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Community from "./pages/Community";
import CommunityPage from "./pages/CommunityPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import User from "./pages/User";
import { userState } from "./atom/userstate";
import { useRecoilState } from "recoil";
import { ToastContainer} from "react-toastify";

function App() {
  const [user] = useRecoilState(userState);
  return (
    <>
      <ToastContainer/>
        <Routes>
          {/* 각 페이지에 대한 Route 설정 */}
          <Route path="/" element={<Home />} />
          <Route path="/community" element={(user.isLoggined) ? <Community /> : <Login />} />
          <Route path="/communitypage" element={(user.isLoggined) ? <CommunityPage /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={(user.isLoggined) ? <User /> : <Login />} />
          {/* 다른 페이지에 대한 Route 추가 */}
        </Routes>
    </>
  );
}

export default App;
