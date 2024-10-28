import { useState } from "react";

export function TestFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  console.log("[TestFollowCard] render with userName: ", userName);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tst-followCard-button is-following"
    : "tst-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tst-followCard">
      <header className="tst-followCard-header">
        <img
          className="tst-followCard-avatar"
          alt="El avatar de midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tst-followCard-info">
          <strong>{children}</strong>
          <span className="tst-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tst-followCard-text">{text}</span>
          <span className="tst-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
