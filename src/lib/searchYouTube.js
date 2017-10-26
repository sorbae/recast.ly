var searchYouTube = (options, callback) => {
  console.log(options);
  var data = {
    q: options.query,
    key: options.key,
    maxResults: options.max,
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

window.searchYouTube = searchYouTube;
