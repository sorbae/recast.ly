var Search = (props) => (
  <div className="search-bar form-inline">
    <input placeholder = "Search" className="form-control" type="text" onChange = {(e) => props.search(e.target.value)}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
    <label className="switch">
      <input type="checkbox" onClick = {() => props.toggle()}></input>
      <span className="slider round"></span>
    </label>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;


// _.debounce((e) => props.search(e.target.value), 1000)