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
    'jquery', 'underscore', 'backbone', 'views/dvdList', 'collections/dvds', 'models/dvd', 'views/dvd'
], function ($, _, Backbone, DvdList, DvdCollection, Dvd, DvdView) {


    var testData = { title: 'some movie', description: 'some movie description'};

    //create a collection


    var dvd = new Dvd(testData);

    var collection = new DvdCollection();

    for (var i=0; i <= 4; i++){
        collection.add(testData);
    }


    //run the appView
    new DvdList({collection: collection});

    console.log(DvdList);



});