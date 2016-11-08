/*global define*/
define([
    'jquery',
    'backbone',
    '../views/dvdDetail',
    '../utils/dataFaker'
], function ($, Backbone, DvdDetail, Faker) {
    'use strict';

    var Router = Backbone.Router.extend({

        initialize: function(options){

            this.appView = options.appView;
            this.cartView = options.cartView;


            this.detailView = $('#detailView');

        },

        routes: {
            '': 'index',
            'dvd/:id': 'displaySingleDvd',
            'add/:id': 'addToCart',
            'remove/:id': 'removeFromCart',
            'cart': 'displayCart'
        },
        index: function () {
           console.log('index route');
            this.appView.$el.show();

            this.detailView.empty();
        },

        displaySingleDvd: function(id){
            var selectedDvdModel = this.dvds.get(parseInt(id));
            //console.log(selectedDvdModel.toJSON());
            var DetailView = new DvdDetail({model: selectedDvdModel});
            this.appView.$el.hide();

            this.detailView.append(DetailView.render().el);
        },

        addToCart: function(id){
            console.log('add dvd with this id to cart: ', id);
            //Backbone.history.navigate('/', {trigger: true});


            var selectedDvdModel = this.appView.collection.get(parseInt(id));


            this.cartView.collection.add(selectedDvdModel);
        },

        removeFromCart: function(id){
            console.log('remove dvd with this id from cart: ', id);
            //Backbone.history.navigate('/', {trigger: true});

            var selectedDvdModel = this.appView.collection.get(parseInt(id));

            this.cartView.collection.remove(selectedDvdModel);

            //re-render is done by listenTo in CartView

        }


    });

    return Router;
});