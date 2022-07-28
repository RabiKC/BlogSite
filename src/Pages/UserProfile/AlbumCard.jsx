import React from "react";

const AlbumCard = ({ photos, album }) => {
  const albumPhotos = photos.filter((p) => p.albumId === album.id);
  return (
    <div className="album-card">
      <h1>{album.title}</h1>
      <div className="images">
        {albumPhotos &&
          albumPhotos.slice(0, 4).map((p, i) => (
            <div className="image" key={i}>
              <img src={p.thumbnailUrl} alt={p.title} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AlbumCard;
