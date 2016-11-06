/*global define*/
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var DVD = Backbone.Model.extend({
        defaults: {
            id: '',
            image: 'img/poster1.jpg',
            title: 'Some Title',
            description: 'some description',
            genre: 'Horror'
        }


    });

    return DVD;
});