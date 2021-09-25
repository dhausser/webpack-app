import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";
import Layout from "./components/Layout";
import "antd/dist/antd.css";
import "./index.css";

function Users(): JSX.Element {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Outlet />
    </div>
  );
}

function Home(): JSX.Element {
  return <div>Home</div>;
}

function UserIndex(): JSX.Element {
  return <div>User Index</div>;
}

function UserProfile(): JSX.Element {
  const { id } = useParams();
  return <div>User Profile ID: {id}</div>;
}

function OwnUserProfile(): JSX.Element {
  return <div>Own Profile</div>;
}

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />}>
            <Route path="/users" element={<UserIndex />} />
            <Route path=":id" element={<UserProfile />} />
            <Route path="me" element={<OwnUserProfile />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
