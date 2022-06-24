# Recipe Finder

* A web app to help you find different recipes.
* Each recipe will show nutrient facts and the ingredients to make the dish.
* This project was created with React.
* This project was created with bootstrap.
* This project is fully-responsive from mobile to desktop screens. 

## Technologies
 * React
 * React bootstrap
 * css
 * Edamam recipe search API



### Project structure
| -src 
    |-components :containing main content 
        |-Main : Main page containing shared components
            |- Foodlist.js : A form that has a search bar
            |-SearchResults.js : Shows search results from FoodList.js, contains api cards with      images, title, calories, and a button showing more food information.
            |-FoodInformation.js : Contains a modal that has food macros, ingredients, and external look showing more about the food as well as how to prepare the dish. 
