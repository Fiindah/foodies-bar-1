const main = () => {
  const searchElement = document.querySelector('#searchElement');
  const buttonSearchElement = document.querySelector('#searchButtonElement');
  const foodListElement = document.querySelector('#foodList');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchFood(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    foodListElement.innerHTML = '';

    results.forEach(food => {
      const {name, fanArt, ingredients, instructions} = food;
      const foodElement = document.createElement('div');
      foodElement.setAttribute('class', 'food');

      foodElement.innerHTML = `
      <img class="fan-art-food" src="${fanArt}" alt="Fan Art">
      <div class="food-info">
        <h2>${name}</h2><br>
        <h4>Ingredients: </h4><p>${ingredients}</p><br>
        <h4>Instructions: </h4><p>${instructions}</p>          
        </div>
        `;
        
        foodListElement.appendChild(foodElement);
      });
    };

  const fallbackResult = message => {
    foodListElement.innerHTML = '';
    foodListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};
