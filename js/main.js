require.config({
    paths: {
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
        "backbone": "../bower_components/backbone/backbone",
        "underscore": "../bower_components/underscore/underscore"
    }
});

//run the app

require([
    'backbone',
    'models/dvd'
], function (Backbone, Dvd) {

    console.log(Backbone);


    var dvd = new Dvd({title: 'some movie'});
    console.log(dvd);
});