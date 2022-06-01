import Profile from './Profile/Profile';
import Statistic from './Statistics/Statistic';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from 'user.json';
import data from 'data.json';
import friendsData from 'friends.json';
import transactions from 'transactions.json';



export default function App() {
  return (
    <div
      style={{
        display: 'flex',
          flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friendsData} />
      <TransactionHistory data={transactions} />
    </div>
  );
}
