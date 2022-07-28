import React, { useState, useEffect } from "react";
import AlbumCard from "./AlbumCard";

const Album = ({ userAlbum, setLoading }) => {
  const photosUrl = "http://localhost:8000/photos";
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    const fetchedData = await fetch(photosUrl)
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <section className="section albums-section">
      <div className="section-wrapper">
        <h1>Albums</h1>
        <div className="albums-wrapper">
          {userAlbum &&
            userAlbum.map((a, i) => (
              <AlbumCard album={a} photos={photos} key={i} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Album;
