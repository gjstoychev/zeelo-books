## Intro
This project was created with [Create React App](https://github.com/facebookincubator/create-react-app) starter kit. It sets up the development environment enabling the latest JavaScript features and uses build tools like Babel and webpack under the hood, but works with zero configuration.


## Getting started

1. Clone or download (and decompress) the project
```
git clone https://github.com/gjstoychev/zeelo-books.git
```

2. Enter the project directory (can be named zeelo-books-master if downloaded instead of cloned)
```
cd zeelo-books
```

3. Install the node_modules
```
npm install
```

4. Start the project or run the tests
```
npm start
```
Once started, the Application should automatically open in your browser: http://localhost:3000

```
npm test
```
You can press 'a' to run all test suites.


## About this SPA

This Single Page Application has two main components: BookList and BookDetails.

BookList component should render:
  * navigation bar - providing an option of adding a new item
  * list of book items - shown as a grid of cards
  * pagination - enabled by default, can be disabled in componentDidMount of /components/BookList
  * footer - showing the currently displayed list items and their total

BookDetails component should render:
  * navigation bar - providing an option to navigate to the BookList component by clicking on the 'Zeelo books' text
  * book details - shown as widgets

All books data is generated automatically and mocked via Axios in '/src/api/axios.js':
  * generating 200 list items and their details at boot
  * providing stub 'GET /api/v1/items' to RETRIEVE list of items
  * providing stub 'GET /api/v1/items/:id' to RETRIEVE item details
  * providing stub 'POST /api/v1/items' to CREATE a new item

The creation a new item will also update the BookList component to show the appropriate books for the last pagination item.


## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


#### `npm test`

Launches the test runner in the interactive watch mode.<br>
On Linux or Mac OS there is a max number of system<br>
watchers that eventually need to be increased for larger<br>
projects if Jest is trying to watch too many files. Fix here:
````
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
````

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.


## Folder Structure

The project structure look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
    containers/
    reducers/
    store/
    index.css
    index.js
  build/
    index.html
    static/
      js/
      css/
      media/
```


## Build and Deploy

There is an optimized production build compiled in the **/build** folder.

You may serve it with a static server:

```
npm install -g serve
serve -s build
```

Find out more about deployment [here:](http://bit.ly/2vY88Kr)
