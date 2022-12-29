import "./styles.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import List from "./Pages/List/List";
import New from "./Pages/New/New";
import Login from "./Pages/Login/Login";
export default function App() {
  return (
    <BrowserRouter>
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 ,minWidth: 'fit-content'}}>
        <Routes>
          <Route path="/dashboard">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
