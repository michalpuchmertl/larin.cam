import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/city/index.css';

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const { options } = props;

  // This seperate functional component fixes the removal of the videoelement
  // from the DOM when calling the dispose() method on a player
  const VideoHtml = (props) => (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className='video-js vjs-theme-city vjs-big-play-centered'
        crossOrigin='anonymous'
      />
    </div>
  );

  React.useEffect(() => {
    const videoElement = videoRef.current;
    let player;
    if (videoElement) {
      player = videojs(videoElement, options, () => {});
    }
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [options]);

  return <VideoHtml />;
};
export default VideoJS;
