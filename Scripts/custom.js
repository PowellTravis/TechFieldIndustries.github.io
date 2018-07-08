$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '7025984419',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '7025984419.1677ed0.d2b4e0507062435fae0bdfa698e4ee92',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();
    
});
