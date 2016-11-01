/*global define*/
define([
    'underscore',
    'backbone',
    '../models/dvd'
], function (_, Backbone, Dvd) {
    'use strict';

    var view = Backbone.View.extend({

        model: Dvd,

        tagName: 'li',

        template: _.template($('#item-template').html()),

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },


    });

    return view;
});