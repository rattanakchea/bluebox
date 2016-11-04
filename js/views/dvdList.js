/*global define*/
define([
    'underscore',
    'backbone',
    '../collections/dvds',
    '../views/dvd'
], function (_, Backbone, DvdCollection, DvdView) {
    'use strict';


    //el property can be attached to a DOM or otherwise created from
    // tagName, className,, id and attribute properties.
    // if none are set, this.el is an empty div

    // this.$el is a cached of jQuery on the view
    // this.$el.find(selector) is equivalent to this.$(selector)
    var view = Backbone.View.extend({


        el: '#dvd-list',

        //template: _.template(template),

        //append all the dvd into the list
        initialize: function(){

            this.$el.empty();

            this.render();
        },

        render: function() {

            this.addAll();

            return this;
        },

        addOne: function(dvd){

            var view = new DvdView({ model: dvd });
            this.$el.append(view.render().el);

        },

        addAll: function(){

           // this.$el.append('hello');

            this.collection.each(this.addOne, this);

        }


    });


    return view;
});