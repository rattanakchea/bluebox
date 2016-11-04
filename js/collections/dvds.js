/*global define*/
define([
    'underscore',
    'backbone',
    '../models/dvd',
], function (_, Backbone, Dvd) {
    'use strict';

    var collection = Backbone.Collection.extend({

        model: Dvd,


        initialize: function(){
            console.log('dvd collections');

        }



    });

    return collection;
});