import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              {/* <Link to="/mentor">Mentor</Link> */}
              <a href="/mentor">mentor</a>
            </li>
            <li>
              {/* <Link to="/student">Student</Link> */}
              <a href="/student">student</a>

            </li>
            
          </ul>
        </nav>

        <Routes>
          <Route path="/mentor">
          </Route>
          <Route path="/student">
          </Route>
          <Route path="/">
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

