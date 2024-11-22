const box = document.querySelector('.box');
const input = document.querySelector('#colorInput');

input.addEventListener('input', () => {
  const color = input.value.trim();
  box.style.backgroundColor = color;
});
