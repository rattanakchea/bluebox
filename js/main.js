require.config({
    paths: {
        jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
        backbone: "../bower_components/backbone/backbone",
        underscore: "../bower_components/underscore/underscore",
        text: '../node_modules/text/text'
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

//testing
require([
    'jquery', 'underscore', 'backbone', 'models/dvd', 'views/dvd'
], function ($, _, Backbone, Dvd, DvdView) {

    console.log(new Dvd());
    console.log(DvdView);
});