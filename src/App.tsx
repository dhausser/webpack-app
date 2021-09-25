import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import "antd/dist/antd.css";
import "./index.css";

function Users(): JSX.Element {
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

function App(): JSX.Element {
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

export default App;
