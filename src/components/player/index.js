import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";
import { Container, Inner, Overlay, Button, Close } from "./styles/player";

export const PlayerContext = createContext();

function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PLayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay
          onClick={() => setShowPlayer(false)}
          {...restProps}
          data-test-id='player'
        >
          <Inner>
            <video id='netflix-player' controls>
              <source src={src} type='video/mp4' />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PLayerButton({ children, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>
      Play
    </Button>
  );
};

export default Player;
