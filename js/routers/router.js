/*global define*/
define([
    'jquery',
    'backbone',
    '../views/dvdDetail',
    '../utils/dataFaker'
], function ($, Backbone, DvdDetail, Faker) {
    'use strict';

    var Router = Backbone.Router.extend({

        initialize: function(){

            this.appView = $('#app');

            this.detailView = $('#detailView');


        },

        routes: {
            '': 'index',
            'dvd/:id': 'gotoDvdDetail'
        },
        index: function () {
           console.log('index route');
        },

        gotoDvdDetail: function(){
            this.appView.hide();

            var  DvdModel = Faker.getDvdModel();

            var DetailView = new DvdDetail({model: DvdModel});

            this.detailView.append(DetailView.render().el);





        }


    });

    return Router;
});