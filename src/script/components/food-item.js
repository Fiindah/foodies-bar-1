class FoodItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        :host {
            display: flex;
            align-items: center;
            max-width: 800px;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            overflow: hidden;
        }  
        
        .fan-art-food {
           max-height: 300px;
           width: 50%;
           padding-left: 24px;
        }
          
        .food-info {
           padding: 24px;
        }
          
        .food-info > h2 {
           font-weight: lighter;
           font-family: Raleway, sans-serif;
        }
          
        .food-info > p {
           text-align: justify;
           margin-top: 10px;
           overflow: hidden;
           text-overflow: ellipsis;
           display: -webkit-box;
           -webkit-box-orient: vertical;
           -webkit-line-clamp: 50; /* number of lines to show */
        }
        </style>
        <img class="fan-art-food" src="${this._food.strMealThumb}" alt="Fan Art">
        <div class="food-info">
            <h2>${this._food.strMeal}</h2><br>
            <h4>Ingredients: </h4>
            <p>${this._food.strMeasure1} <span>${this._food.strIngredient1}. ${this._food.strMeasure2} <span>${this._food.strIngredient2}.
            ${this._food.strMeasure3} <span>${this._food.strIngredient3}. ${this._food.strMeasure4} <span>${this._food.strIngredient4}.
            ${this._food.strMeasure5} <span>${this._food.strIngredient5}. ${this._food.strMeasure6} <span>${this._food.strIngredient6}.
            ${this._food.strMeasure7} <span>${this._food.strIngredient7}. ${this._food.strMeasure8} <span>${this._food.strIngredient8}.
            ${this._food.strMeasure9} <span>${this._food.strIngredient9}. ${this._food.strMeasure10} <span>${this._food.strIngredient10}.
            ${this._food.strMeasure11} <span>${this._food.strIngredient11}. ${this._food.strMeasure12} <span>${this._food.strIngredient12}.
            ${this._food.strMeasure13} <span>${this._food.strIngredient13}. ${this._food.strMeasure14} <span>${this._food.strIngredient14}. 
            ${this._food.strMeasure15} <span>${this._food.strIngredient15}. ${this._food.strMeasure16} <span>${this._food.strIngredient16}.
            ${this._food.strMeasure17} <span>${this._food.strIngredient17}. ${this._food.strMeasure18} <span>${this._food.strIngredient18}.
            ${this._food.strMeasure19} <span>${this._food.strIngredient19}. ${this._food.strMeasure20} <span>${this._food.strIngredient20}.
          </p><br>
            <h4>Instructions: </h4><p>${this._food.strInstructions}</p>          
            </div>
        `;
  }
}

customElements.define("food-item", FoodItem);