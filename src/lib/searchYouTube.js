var searchYouTube = (query, callback) => {
  var data = {
    q: query,
    key: window.YOUTUBE_API_KEY,
    maxResults: '5',
    part: 'snippet',
    type: 'video',
    videoEmbeddable: 'true'
  };
  
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: data,
    
    success: function(data) {
      console.log('success');
      callback(data.items);
    },
    
    error: function(data) {
      console.log('failure', data);
    }
  });

};

window.searchYouTube = _.debounce(searchYouTube, 500);
