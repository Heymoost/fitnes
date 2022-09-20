document.querySelectorAll('.seasons__block').forEach(function (tab) {
  tab.classList.remove('seasons__block-nojs');
});

function months(target) {
  if (target === document.querySelector('.one')) {
    document.querySelector('.seasons__block-one').classList.add('seasons__block-active');
  }

  if (target === document.querySelector('.six')) {
    document.querySelector('.seasons__block-six').classList.add('seasons__block-active');
  }

  if (target === document.querySelector('.twelve')) {
    document.querySelector('.seasons__block-twelve').classList.add('seasons__block-active');
  }
}

document.querySelectorAll('.seasons__conteiner-btn').forEach(function (target) {
  target.addEventListener('click', function (event) {
    document.querySelectorAll('.seasons__conteiner-btn').forEach(function (tab) {
      tab.classList.remove('active-btn');
    });
    document.querySelectorAll('.seasons__block').forEach(function (tab) {
      tab.classList.remove('seasons__block-active');
    });
    event.target.closest('.seasons__conteiner-btn').classList.add('active-btn');
    months(target);
  });
});
