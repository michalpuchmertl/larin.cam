import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import VideoJS from '../../components/VideoJS';
import getFirebase from '../../utils/firebase';

import Chat from './_Chat';

import './livestream.scss';

function Livestream(props) {
  let firebase = getFirebase();

  const [videoSrc, setVideoSrc] = useState('null');

  useEffect(() => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        fetch('https://larin.cam/issue-stream-url', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${idToken}`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
          },
        }).then((res) => {
          res.json().then((url) => {
            setVideoSrc(url.data);
          });
        });
      })
      .catch(async function (error) {
        await firebase.auth().signOut();
      });
  }, []);

  const handleLogout = async () => {
    await firebase.auth().signOut();
  };

  console.log('SRC', videoSrc);

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
        <div className='col-1'>
          <button className='btn btn-danger' onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

Livestream.propTypes = {};

export default Livestream;
