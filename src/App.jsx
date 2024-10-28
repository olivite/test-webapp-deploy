import "./App.css";
import { TestFollowCard }  from "./TestFollowCard.jsx";

const users = [
  {
    userName: "snowball",
    name: "Snowball Pets",
    isFollowing: false,
  },
  {
    userName: "pompon",
    name: "Pompón Sin",
    isFollowing: false,
  },
  {
    userName: "chloe",
    name: "Chloe Pets",
    isFollowing: false,
  },
  {
    userName: "norman",
    name: "Norman Pets",
    isFollowing: false,
  },
];

export default function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TestFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TestFollowCard>
      ))}
    </section>
  );
}
