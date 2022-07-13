import { useState, useEffect } from "react"; //useEffect goes after useState
// import "./App.css";
import SignUp from "./signOrLog";
import Image from "../components/image";
const PhotoFeed = () => {
  const [user, setUser] = useState();
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
  };
  useEffect(() => {
    fetchImages(setPhotos);
  }, []);

  return (
    <div className="App">
      <SignUp setter={setUser} />
      <h1>{user}</h1>
      <div>
        {user &&
          photos.map((item, i) => {
            return (
              <Image key={i} author={item.author} url={item.download_url} />
            );
          })}
      </div>
    </div>
  );
};

export default PhotoFeed;
