import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from '../components/Profile/Profile';
import Statistics from '../components/Statistics/Statistics';
import FriendList from '../components/FriendList/FriendList';
import Transactions from '../components/Transactions/Transactions';
import user from '../data/user';
import data from '../data/data-statistics';
import friends from '../data/friends';
import transactions from '../data/transactions';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/profile">01. Profile</Link>
          </li>
          <li>
            <Link to="/statistics">02. Statistics</Link>
          </li>
          <li>
            <Link to="/friendsList">03. Friends List</Link>
          </li>
          <li>
            <Link to="/transactions">04.Transactions</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/profile"
          element={
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
          }
        />
        <Route
          path="/statistics"
          element={<Statistics title="Upload stats" stats={data} />}
        />
        <Route path="/friendsList" element={<FriendList friends={friends} />} />
        <Route
          path="/transactions"
          element={<Transactions items={transactions} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
