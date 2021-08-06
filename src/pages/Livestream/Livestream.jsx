import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import VideoJS from '../../components/VideoJS';
import getFirebase from '../../utils/firebase';

import Chat from './_Chat';

import './livestream.scss';

function Livestream(props) {
  let firebase = getFirebase();

  const [videoSrc, setVideoSrc] = useState('asd');

  useEffect(() => {
    var docRef = firebase.firestore().collection('paths').doc('livestream');

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setVideoSrc(doc.data().url);
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  }, []);

  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    liveui: true,
    fluid: true,
    sources: [
      {
        src: 'http://192.168.0.116/play.m3u8',
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
