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
import firebase from "firebase/compat/app";
import { collection, query, getDocs, addDoc } from "firebase/firestore";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getDocumentos();
    console.log("finish");
  }, []);

  const getDocumentos = async () => {
    const q = query(collection(db, "posts"));
    const querySnapshot = await getDocs(q);
    setPosts(
      querySnapshot.forEach((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };

  const addDocumento = async () => {
    // Add a new document with a generated id.
    await addDoc(collection(db, "posts"), {
      name: "Esau Alvarez",
      description: "This is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firebase.FieldValue.serverTimestamp(),
    });
  };
  const sendPost = (e) => {
    e.prventDefault();
    addDocumento();
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
        {/*         {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />;
        })} */}
      </div>
    </div>
  );
}

export default Feed;
