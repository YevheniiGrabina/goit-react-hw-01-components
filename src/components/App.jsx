import Profile from './Profile/Profile';
import Statistic from './Statistics/Statistic';
import user from 'user.json';
import data from 'data.json';


export default function App() {
  return (
    <div
      style={{
        height: '200vh',
        display: 'flex',
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
    </div>
  );
}
