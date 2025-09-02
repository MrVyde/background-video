import backgroundVideo from "../utils/background-video.js";

test('toggles play to pause', () => {
  expect(backgroundVideo.toggleVideoState('play')).toBe('pause');
});

test('toggles pause to play', () => {
  expect(backgroundVideo.toggleVideoState('pause')).toBe('play');
});


test('returns true when readyState is 3 or higher', () => {
  const mockVideo = { readyState: 4 };
  expect(backgroundVideo.isVideoReady(mockVideo)).toBe(true);
});

test('returns false when readyState is less than 3', () => {
  const mockVideo = { readyState: 2 };
  expect(backgroundVideo.isVideoReady(mockVideo)).toBe(false);
});

test('returns true when both video and DOM are loaded', () => {
  expect(backgroundVideo.shouldHidePreloader(true, true)).toBe(true);
});

test('returns false when either is not loaded', () => {
  expect(backgroundVideo.shouldHidePreloader(true, false)).toBe(false);
  expect(backgroundVideo.shouldHidePreloader(false, true)).toBe(false);
});

test('calculates correct timeout duration', () => {
  expect(backgroundVideo.getPreloaderTimeout(1000, 2500)).toBe(1500);
});

test('returns fa-pause when state is play', () => {
  expect(backgroundVideo.getIconState('play')).toBe('fa-pause');
});

test('returns fa-play when state is pause', () => {
  expect(backgroundVideo.getIconState('pause')).toBe('fa-play');
});

test('returns true for valid video formats', () => {
  expect(backgroundVideo.validateVideoSource('video.mp4')).toBe(true);
  expect(backgroundVideo.validateVideoSource('clip.webm')).toBe(true);
  expect(backgroundVideo.validateVideoSource('movie.ogg')).toBe(true);
});

test('returns false for unsupported formats', () => {
  expect(backgroundVideo.validateVideoSource('image.png')).toBe(false);
  expect(backgroundVideo.validateVideoSource('audio.mp3')).toBe(false);
});





