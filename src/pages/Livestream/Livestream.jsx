import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import VideoJS from '../../components/VideoJS';
import getFirebase from '../../utils/firebase';

import Chat from './_Chat';

import './livestream.scss';

function Livestream(props) {
  let firebase = getFirebase();

  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    fetch('https://larin.cam/issue-stream-url').then((res) => {
      setVideoSrc(res.json());
    });
  }, []);


  console.log("SRC", videoSrc)

  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    liveui: true,
    fluid: true,
    sources: [
      {
        src: videoSrc,
        type: 'application/x-mpegURL',
      },
    ],
  };

  if (!videoSrc) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      Livestream
      <div className='row'>
        <div className='col-12 col-lg-9'>
          <div className='video-wrapper'>
            <VideoJS options={videoJsOptions} />
          </div>
        </div>
        <div className='col-12 col-lg-3'>
          <Chat />
        </div>
      </div>
    </div>
  );
}

Livestream.propTypes = {};

export default Livestream;
