/*global define*/
define([
    'underscore',
    'backbone',
    '../models/dvd',
    'text!views/templates/dvd.html'
], function (_, Backbone, Dvd, template) {
    'use strict';

    console.log(template);

    var view = Backbone.View.extend({

        model: Dvd,

        tagName: 'li',

        template: _.template(template),

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }


    });

    return view;
});