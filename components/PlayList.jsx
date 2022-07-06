import React from "react";

const PlayList = ({ tracks, setTrackIndex, toNextTrack }) => {
  return (
    <>
      <div className="play-list-wrapper">
        {tracks.map((track, index) => {
          return (
            <div
              // onClick={() => {
              //   setTrackIndex(index);
              //   toNextTrack();
              // }}
              key={index}
              className="playlist-item"
            >
              <h3>{track.title}</h3>
              <h4>{track.artist}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PlayList;
