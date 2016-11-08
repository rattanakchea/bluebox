
// Cart is a collection of Dvds

define([
    'underscore',
    'backbone',
    '../models/dvd',
], function (_, Backbone, Dvd) {
    'use strict';

    var Cart = Backbone.Collection.extend({

        model: Dvd,

        initialize: function(){

        }

    });

    return Cart;
});