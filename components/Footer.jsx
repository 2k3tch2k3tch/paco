import React from 'react';

export default () => (
  <footer>
    <emojis>
      <emoji />
    </emojis>

    <style jsx>
      {`
      h1 {
        font-size: 3rem;
      }

      emojis {
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      @keyframes emojiCycle {
        0%, 100% { content: "▲"; }
        20% { content: "🌑"; }
        40% { content: "☾"; }
        60% { content: "🖤"; }
        80% { content: "🖥"; }
      }

      emoji {
        font-size: 2rem;
      }

      emoji::after {
        content: "";
        animation: emojiCycle 2s linear forwards infinite;
      }
      `}
    </style>
  </footer>
);
