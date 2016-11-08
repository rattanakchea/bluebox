/*global define*/
define([
    'underscore',
    'backbone',
    '../collections/dvds',
    '../views/dvd',
    'text!views/templates/dvdInCart.html'
], function (_, Backbone, DvdCollection, DvdView, dvdInCartTemplate) {
    'use strict';

    var view = Backbone.View.extend({


        el: '#cart',

        //template: _.template(template),

        //append all the dvd into the list
        initialize: function(){
            this.listenTo(this.collection, 'all', this.render);
        },

        render: function() {
            this.$('#cartView').empty();
            this.addAll();

            this.$('#dvdsInCart').html(this.collection.length);
            return this;
        },

        addOne: function(dvd){

            var options = { model: dvd, template: dvdInCartTemplate};

            var view = new DvdView(options);
            this.$('#cartView').append(view.render().el);

        },

        addAll: function(){
            this.collection.each(this.addOne, this);
        }


    });


    return view;
});