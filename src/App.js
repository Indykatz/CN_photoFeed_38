import { useState } from "react";
// router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages for router dom
import PhotoFeed from "./pages/photoFeed";
import SignOrLog from "./pages/signOrLog";

const App = ({ setter }) => {
  const [user, setUser] = useState([]);

  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<SignOrLog user={user} setUser={setUser} />}
            />
            <Route
              path="/photoFeed"
              element={<PhotoFeed user={user} setter={setter} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
