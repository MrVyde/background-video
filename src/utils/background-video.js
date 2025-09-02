function toggleVideoState(current) {
  return current === 'play' ? 'pause' : 'play';
}

function isVideoReady(videoElement) {
  return videoElement.readyState >= 3; // HAVE_FUTURE_DATA
}

function shouldHidePreloader(videoLoaded, domLoaded) {
  return videoLoaded && domLoaded;
}

function getPreloaderTimeout(startTime, endTime) {
  return endTime - startTime;
}

function getIconState(currentState) {
  return currentState === 'play' ? 'fa-pause' : 'fa-play';
}

function validateVideoSource(url) {
  return /\.(mp4|webm|ogg)$/i.test(url.trim());
}


export default {
    toggleVideoState,
    isVideoReady,
    shouldHidePreloader,
    getPreloaderTimeout,
    getIconState,
    validateVideoSource
}

