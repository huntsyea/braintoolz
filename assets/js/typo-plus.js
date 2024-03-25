document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.querySelector('.typo-plus-checkbox');

  checkbox.checked = localStorage.getItem('typoPlus') === 'true';

  checkbox.addEventListener('change', function (event) {
    localStorage.setItem('typoPlus', event.currentTarget.checked);
  });
});