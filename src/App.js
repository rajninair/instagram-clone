import { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([
    {
      username: "cleverqazi",
      caption: "Wow it works",
      imageUrl: "https://picsum.photos/id/257/600/600",
    },
    {
      username: "ssssonny",
      caption: "Wow it works",
      imageUrl: "https://picsum.photos/id/243/200/300",
    },
    {
      username: "abc",
      caption: "Wow it works",
      imageUrl: "https://picsum.photos/id/237/200/300",
    },
    {
      username: "xyz",
      caption: "Wow it works",
      imageUrl: "https://picsum.photos/200",
    },
  ]);
  const [open, setOpen] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // axios
    // on auth change - login,logout
    // if (authUser) {
    // User has logged in
    // setUser(authUser);
    // console.log(authUser);
    // } else {
    // User is not logged in
    setUser(null);
  }, []);

  useEffect(() => {
    // axios
    // setPosts(response.data)
  }, []);

  const signup = (e) => {
    e.preventDefault();

    // Signup logic
  };
  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="app__headerImage"
                src="http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              />
            </center>

            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signup}>
              Sign Up
            </Button>
          </form>
        </div>
      </Modal>

      <div className="app__header">
        <img
          className="app__headerImage"
          src="http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram"
        />
      </div>

      <Button onClick={() => setOpen(true)}>Sign Up</Button>

      <h1>Let's build and Instagram Clone with React</h1>

      {posts.map((post) => (
        <Post
          key={Math.random()}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
