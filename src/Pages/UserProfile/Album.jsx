import React, { useState, useEffect } from "react";

const Album = ({ userAlbum, setLoading }) => {
  const photosUrl = "http://localhost:8000/photos";
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    try {
      setLoading(true);
      await fetch(photosUrl)
        .then((res) => res.json())
        .then((data) => setPhotos(data));
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
      setLoading(false);
    }
  };

  //   useEffect(() => {
  //     getPhotos();
  //   }, []);

  return (
    <section className="section albums-section">
      <div className="section-wrapper">
        <div className="album-grid"></div>
      </div>
    </section>
  );
};

export default Album;
