/*global define*/
define([
    'underscore',
    'backbone',
    '../models/dvd',
    'text!views/templates/dvd.html'
], function (_, Backbone, Dvd, template) {
    'use strict';


    //el property can be attached to a DOM or otherwise created from
    // tagName, className,, id and attribute properties.
    // if none are set, this.el is an empty div

    // this.$el is a cached of jQuery on the view
    // this.$el.find(selector) is equivalent to this.$(selector)
    var view = Backbone.View.extend({


        className: 'dvd',
        template: _.template(template),

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        events: {
            'click .card img': 'navigate'
        },

        navigate: function(){
            console.log('navigate to detail page');
        }


    });

    return view;
});