function months(target) {
  if (target === document.querySelector('.one')) {
    document.querySelectorAll('.trainer').forEach(function (text) {
      text.innerText = '5000';
    });
    document.querySelectorAll('.day').forEach(function (text) {
      text.innerText = '1700';
    });
    document.querySelectorAll('.fullday').forEach(function (text) {
      text.innerText = '2700';
    });
  }

  if (target === document.querySelector('.six')) {
    document.querySelectorAll('.trainer').forEach(function (text) {
      text.innerText = '10000';
    });
    document.querySelectorAll('.day').forEach(function (text) {
      text.innerText = '3000';
    });
    document.querySelectorAll('.fullday').forEach(function (text) {
      text.innerText = '5000';
    });
  }

  if (target === document.querySelector('.twelve')) {
    document.querySelectorAll('.trainer').forEach(function (text) {
      text.innerText = '30000';
    });
    document.querySelectorAll('.day').forEach(function (text) {
      text.innerText = '9000';
    });
    document.querySelectorAll('.fullday').forEach(function (text) {
      text.innerText = '15000';
    });
  }
}

document.querySelectorAll('.seasons__conteiner-btn').forEach(function (target) {
  target.addEventListener('click', function (event) {
    document.querySelectorAll('.seasons__conteiner-btn').forEach(function (tab) {
      tab.classList.remove('active-btn');
    });
    event.target.closest('.seasons__conteiner-btn').classList.add('active-btn');
    months(target);
  });
});
