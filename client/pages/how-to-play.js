import Link from "next/link";
import Head from "next/head";
import { useSelector } from "react-redux";

import classes from "../styles/HowToPlay.module.css";

const HowToPlay = () => {
  const settings = useSelector((state) => state.gameDetails.settings);

  return (
    <>
      <Head>
        <title>How to Play</title>
        <meta description="The rules and controls for playing socket duel" />
      </Head>
      <div className={classes["main-container"]}>
        <h1>How to Play</h1>
        <p>
          Socket Duel is a 2 player game which involes 2 players battling it out
          in an arena to hit the other first with balls. Every couple of
          seconds, a new ball will spawn, and the first player to pick it up is
          able to shoot it. If you collide with your own ball, they'll bounce
          off of you, but if your opponent collides with one of your balls,
          they'll lose the round. First to win {settings.firstTo} rounds wins
          the game.
        </p>
        <p>
          To get started, you can either create a room, or join one already
          created using the room id that that's shown once someone else has
          created a room. Once both players are in the room, you'll be able to
          start the round.
        </p>
        <p>Controls: space=shoot, arrows=move</p>
        <div className={classes["back-home-link"]}>
          <Link href="/">Back home</Link>
        </div>
      </div>
    </>
  );
};

export default HowToPlay;
