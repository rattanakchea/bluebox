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
    'jquery', 'underscore', 'backbone', 'routers/router', 'utils/dataFaker', 'views/dvdList', 'collections/dvds', 'models/dvd', 'views/dvd'
], function ($, _, Backbone, Router, DataFaker, DvdList, DvdCollection, DvdModel, DvdView) {


    new Router();
    Backbone.history.start();



    //generate sample data
    var sampleData = DataFaker.generateTestData(4);

    var collection = new DvdCollection(sampleData);



    //run the appView
    var appView = new DvdList({collection: collection});

    console.log('appView', appView);


});