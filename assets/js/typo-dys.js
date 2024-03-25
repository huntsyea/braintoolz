document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.querySelector('.typo-dys-checkbox');

  checkbox.checked = localStorage.getItem('typoDys') === 'true';

  checkbox.addEventListener('change', function (event) {
    localStorage.setItem('typoDys', event.currentTarget.checked);
  });
});