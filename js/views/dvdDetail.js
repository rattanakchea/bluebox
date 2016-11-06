/*global define*/
define([
    'underscore',
    'backbone',
    '../models/dvd',
    'text!views/templates/dvdDetail.html'
], function (_, Backbone, Dvd, template) {
    'use strict';


    var view = Backbone.View.extend({


        className: 'dvd',
        template: _.template(template),

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }


    });

    return view;
});