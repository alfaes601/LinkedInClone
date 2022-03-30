import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import InputOption from "./InputOption";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (data) => {
        setPosts(
          data.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      }
    );
  };

  const sendPost = (e) => {
    e.preventDefault();
    (async () => {
      let collRef = await collection(db, "posts"); // returns a collection ref. ie. creates one if one does not exist.
      let inputObject = {
        name: "Esau Alvarez",
        description: "This is a test",
        message: input,
        photoUrl: "",
        timestamp: serverTimestamp(),
      };
      await addDoc(collRef, inputObject, { merge: true });
      setInput("");
    })();
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>

        {/* Post */}
        {posts?.map(
          ({ id, data: { name, description, message, photoUrl } }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Feed;
