import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Head from "next/head";

import { gameDetailsActions } from "../store/gameDetailsSlice";
import { useRouter } from "next/router";
import socket from "../utils/socketConnect";

import classes from "../styles/index.module.css";

const Home = () => {
  const [showJoinRoomForm, setShowJoinRoomForm] = useState();
  const [errorJoiningRoom, setErrorJoiningRoom] = useState();

  const router = useRouter();
  const roomCodeRef = useRef();
  const dispatch = useDispatch();

  const showJoinRoomHandler = () => {
    setShowJoinRoomForm((state) => !state);
  };

  useEffect(() => {
    socket.emit("get-settings");

    socket.on("settings-received", (settings) => {
      dispatch(gameDetailsActions.setSettings(settings));
    });

    socket.on("room-created", (roomId) => {
      socket.emit("get-settings");
      dispatch(gameDetailsActions.setRoomId(roomId));
      dispatch(gameDetailsActions.setPlayerNum(1));
      router.push(`/${roomId}`);
    });

    socket.on("room-joined", (roomId) => {
      dispatch(gameDetailsActions.setRoomId(roomId));
      dispatch(gameDetailsActions.setPlayerNum(2));
      router.push(`/${roomId}`);
    });

    socket.on("room-join-error", () => {
      setErrorJoiningRoom(true);
    });
  });

  const createRoomHandler = () => {
    socket.emit("create-room");
  };

  const joinRoomHandler = (e) => {
    e.preventDefault();
    socket.emit("join-room", roomCodeRef.current.value);
  };

  return (
    <>
      <Head>
        <title>Socket Duel</title>
        <meta description="The home page for the socket duel game" />
      </Head>
      <div className={classes["main-container"]}>
        <div className={classes["sub-container"]}>
          <h1 className={classes.title}>Socket Duel</h1>
          <button
            onClick={createRoomHandler}
            className={`${classes["create-room-button"]} ${classes.button}`}
          >
            Create a Room
          </button>
          <button onClick={showJoinRoomHandler} className={classes.button}>
            Join a Room
          </button>
          {showJoinRoomForm && (
            <form
              onSubmit={joinRoomHandler}
              className={classes["join-room-form"]}
            >
              <label htmlFor="room-code">Join room: </label>
              <input ref={roomCodeRef} id="room-code" type="text" />
              <button className={classes.button}>Submit</button>
            </form>
          )}
          {errorJoiningRoom && (
            <p className={classes.error}>
              Either an invalid room id, or two people are already in that room.
            </p>
          )}
          <div className={classes["how-to-play-link"]}>
            <Link href="/how-to-play">How to Play</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
