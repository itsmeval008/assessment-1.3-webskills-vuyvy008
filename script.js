document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('bird-image');
  const caption = document.getElementById('bird-caption');
  const buttons = document.querySelectorAll('.bird-btn');
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  const birds = {
    pardalote:        { src: 'http://www.outgrabe.net/bird00.jpg', name: 'Pardalote', credit: 'Pardalote by fir0002 (CC-BY-NC)' },
    purpleSwampHen:   { src: 'http://www.outgrabe.net/bird01.jpg', name: 'Purple swamp hen', credit: 'Purple swamp hen by Toby Hudson (CC-BY-SA)' },
    whiteHeadedStilt: { src: 'http://www.outgrabe.net/bird02.jpg', name: 'White-headed Stilt', credit: 'White-headed Stilt by JJ Harrison (CC-BY-SA)' },
    inlandThornbill
