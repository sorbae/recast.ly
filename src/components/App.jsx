// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> view goes here</h5></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
// window.App = App;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      playingVideo: window.exampleVideoData[0],
      autoPlay: '',
      toggle: true
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.searchBar = this.searchBar.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
  }
  
  componentDidMount() {
    var context = this;    
    searchYouTube('cats',
      function(data) { context.setState({videos: data, 'playingVideo': data[0]}); });
  }

  toggleHandler() {
    this.setState({toggle: !this.state.toggle});
    if (this.state.toggle) {
      this.setState({'autoPlay': '?autoplay=1'});
      console.log('GOOD');
    } else {
      this.setState({'autoPlay': ''});
      console.log('BAD');
    }
  }
  
  clickHandler(e) {
    this.setState({playingVideo: e.video});
  }

  searchBar(e) {
    var context = this; 
    searchYouTube(e,
      function(data) { context.setState({videos: data, 'playingVideo': data[0]}); });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search = {this.searchBar} toggle = {this.toggleHandler}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.playingVideo} toggle = {this.state.autoPlay}/>
          </div>
          <div className="col-md-5">
            <VideoList videos = {this.state.videos} clickie = {this.clickHandler}/>
          </div>
        </div>
      </div>
    );
  }
  
}


