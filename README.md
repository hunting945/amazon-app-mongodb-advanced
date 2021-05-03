# Tools, Techniques, Skills are in use 使用到的工具, 技術, 技巧
* HTML, CSS
* React: component, hooks, router, axios
* Redux: store, reducers, actions
* Node.js, Express
* MongoDB
* Development Tools: VSCode, github

# How to run 如何使用
1. Download project 
```
git clone https://github.com/hunting945/amazon-app-mongodb
```
2. Setup local MongoDB
* Install MongoDB: https://www.mongodb.com/try/download/community
* Create .env file in project folder
* Set MONGODB_URL
``` 
MONGODB_URL=mongodb://localhost/amazon-app-mongodb 
```


3. Install backend packages and run app on http://localhost:5000
```
npm install
cd backend/
npm start
```
4. Install frontend packages and run app on http://localhost:3000
```
cd frontend/
npm install
npm start
```
# Developement steps 開發步驟
### Step1: setup backend project
* init project
```
npm init
npm install express
```
* install babel and add .babelrc file in folder
```
npm install @babel/cli @babel/core @babel/node @babel/preset-env nodemon --save-dev
```
```
{
    "presets": [
        [
            "@babel/preset-env"
        ]
    ]
}
```
* create product models in data.js as below
```
{
    _id: '1',
    name: 'Regular Fit Shirt',
    category: 'Shirts',
    image: '/images/d1.jpg',
    price: 60,
    brand: 'BOSS',
    rating: 4.5,
    numReviews: 10,
    countInStock: 6
}
```
* create restful api for getting product info
```
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find(x => x._id === productId);
  if (product)
    res.send(product);
  else
    res.status(404).send({ msg: "Product Not Found." })
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
```
* add start command as node backend/server.js
```
"scripts": {
  "start": "nodemon --watch backend --exec babel-node backend/server.js"
},
```
### Step2: setup frontend project and add homepage
* init project
```
npx create-react-app frontend
```
* create header, main and footer
* use CSS styling elements
* display products in homepage

### Step3: add homescreen and productscreen
* install react-router to do frontend routing
```
npm install react-router-dom
```
* use BrowserRouter and Route for homescreen
* use axios to get products data from backend
```
npm install axios
```
* use react hook to manage stateful data (useState, useEffect)

### Step4: add redux and react-redux
* use redux to manage product state
```
npm install redux react-redux
```
* create productList, productDetails in store 
* create actions: listProducts, detailsProduct
* create reducers: productListReducer, productDetailsReducer

### Step5: add cartscreen
* create cart in store 
* create actions: addToCart, removeFromCart
* create reducers: cartReducer
* use cookie to memorize user cart items
```
npm install js-cookie
```
```
Cookie.set("cartItems", JSON.stringify(cartItems));
```

### Step6: store user private data in mongodb
* install mongodb in local pc: https://www.mongodb.com/try/download/community

* install mongoose in backend project
```
npm install mongoose
```
* install dotenv and create .env file in backend project to store user private data
```
npm install dotenv
```
* set MONGODB_URL in config.js
``` 
MONGODB_URL=mongodb://localhost/amazon-app-mongodb 
```
* create userSchema and userModel
* create userRoute

### Step7: add signinscreen
* install jsonwebtoken to implement signin function
```
npm install jsonwebtoken
```
* create productRoute
* create /signin api

### Step8: add registerscreen
* install body-parser
```
npm install body-parser
```
* create /api/users/register api

### Step9: loading products from mongodb instead of data.js
* create productSchema and productModel
* create productRoute to get product info

### Step10: add checkout procedure screens
* create checkout component
* create shippingscreen
* create paymentscreen
* create placeorderscreen
 