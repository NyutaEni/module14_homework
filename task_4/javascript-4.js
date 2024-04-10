//Задание 4
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const submitButton = document.querySelector('#submitButton');
const imageContainer = document.querySelector('#imageContainer');

submitButton.addEventListener('click', () => {
  const value1 = parseFloat(input1.value);
  const value2 = parseFloat(input2.value);

  if (isNaN(value1) || isNaN(value2) || value1 < 100 || value1 > 300 || value2 < 100 || value2 > 300) {
    imageContainer.innerHTML = 'Одно из чисел вне диапазона от 100 до 300';
  } else {
    const imageUrl = `https://dummyimage.com/${value1}x${value2}/`;
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(blob);
        imageContainer.innerHTML = '';
        imageContainer.appendChild(imageElement);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
        imageContainer.innerHTML = 'Error fetching image';
      });
  }
});
