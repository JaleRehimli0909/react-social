import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Home, Register, Login, Profile, Error } from "./Pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="*" element={<Error/>} />
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
