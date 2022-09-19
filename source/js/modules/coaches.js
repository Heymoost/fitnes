let mql = window.matchMedia('(max-width: 1199px)');

document.querySelectorAll('.coaches__item').forEach(function (target) {
  target.addEventListener('click', function (event) {
    if (mql.matches) {
      document.querySelectorAll('.coaches__item').forEach(function (tab) {
        tab.classList.remove('coaches__item-active');
      });

      event.target.closest('.coaches__item').classList.add('coaches__item-active');
    } else {
      return;
    }
  });
});
