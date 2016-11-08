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

            //dvd collection
            this.dvds = options.collection;
            this.cartView = options.cartView;


            this.appView = $('#app');
            this.detailView = $('#detailView');

        },

        routes: {
            '': 'index',
            'dvd/:id': 'displaySingleDvd',
            'add/:id': 'addToCart',
            'cart': 'displayCart'
        },
        index: function () {
           console.log('index route');

            this.appView.show();
            this.detailView.empty();
        },

        displaySingleDvd: function(id){

            console.log(id);

            var selectedDvdModel = this.dvds.get(parseInt(id));

            console.log(selectedDvdModel.toJSON());


            var DetailView = new DvdDetail({model: selectedDvdModel});

            this.appView.hide();
            this.detailView.append(DetailView.render().el);
        },

        addToCart: function(id){

            console.log('add dvd with this id to cart: ', id);
            //Backbone.history.navigate('/', {trigger: true});

            var selectedDvdModel = this.dvds.get(parseInt(id));

            this.cartView.collection.add(selectedDvdModel);
            this.cartView.render();


        }


    });

    return Router;
});