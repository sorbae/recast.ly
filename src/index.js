// TODO: Render the `App` component to the DOM
//import { BrowserRouter, Route, Link } from 'react-router-dom'

// var BrowserRouter = require('react-router-dom').BrowserRouter
// var Route = require('react-router-dom').Route
// var Link = require('react-router-dom').Link
 
ReactDOM.render(<App searchYouTube = {window.searchYouTube}/>, document.getElementById('app'));

// ReactDOM.render((
//   <ReactRouter.Router history={ReactRouter.hashHistory}>
//     <ReactRouter.Route path="/" component={App}>
//     </ReactRouter.Route>
//   </ReactRouter.Router>), 
// document.getElementById('app'));