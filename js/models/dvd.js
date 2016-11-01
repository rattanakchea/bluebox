/*global define*/
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var DVD = Backbone.Model.extend({
        defaults: {
            title: '',
            genre: ''
        }
    });

    return DVD;
});