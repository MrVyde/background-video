// window.addEventListener('load', () => {
//   setTimeout(() => {
//     document.querySelector('.wrapper')?.classList.add('hidden');
//     document.querySelector('.back-ctnr')?.classList.add('visible');
//   }, 2000);
// });

window.addEventListener('load', () => {
  // Preloader logic
  setTimeout(() => {
    document.querySelector('.wrapper')?.classList.add('hidden');
    document.querySelector('.back-ctnr')?.classList.add('visible');
  }, 2000);

  // Video toggle logic
  const video = document.getElementById('bg-video');
  const button = document.querySelector('.button');
  const iconSpan = button.querySelector('span');

  button.addEventListener('click', () => {
    if (!video) return;

    const icon = iconSpan.querySelector('i');

    if (video.paused) {
      video.play();
      icon.classList.remove('fa-play');
      icon.classList.add('fa-pause');
    } else {
      video.pause();
      icon.classList.remove('fa-pause');
      icon.classList.add('fa-play');
    }
  });
});