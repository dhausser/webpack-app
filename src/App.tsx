import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import "antd/dist/antd.css";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="users/*" element={<Users />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

function Users() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path=":id" element={<div>User Profile</div>} />
        <Route path="me" element={<div>Own Profile</div>} />
      </Routes>
    </div>
  );
}

export default App;
