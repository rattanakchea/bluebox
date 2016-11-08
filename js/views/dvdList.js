/*global define*/
define([
    'underscore',
    'backbone',
    '../collections/dvds',
    '../views/dvd',
    'text!views/templates/stats.html'
], function (_, Backbone, DvdCollection, DvdView, statsTemplate) {
    'use strict';


    //el property can be attached to a DOM or otherwise created from
    // tagName, className,, id and attribute properties.
    // if none are set, this.el is an empty div

    // this.$el is a cached of jQuery on the view
    // this.$el.find(selector) is equivalent to this.$(selector)
    var view = Backbone.View.extend({


        el: '#app',

        //template: _.template(template),

        //append all the dvd into the list
        initialize: function(){

            //this.$el.empty();

            //listen to collection change
            this.$dvdList = this.$('#dvd-list');
            this.$stats = this.$('#stats');


            this.listenTo(this.collection, 'add', this.addOne);
            this.listenTo(this.collection, 'all', _.debounce(this.updateStats, 0));
            this.render();
        },

        events: {
            'click #add': 'addDvd'
        },


        addDvd: function(e){
            e.preventDefault();
            var title = this.$('#title').val() || 'random Title';
            this.collection.add({title: title});
        },

        updateStats: function(){
            var template = _.template(statsTemplate);
            this.$stats.html(template({
                count: this.collection.length
            }));
        },

        render: function() {
            this.updateStats();
            this.addAll();
            return this;
        },

        addOne: function(dvd){
            var view = new DvdView({ model: dvd });
            this.$dvdList.append(view.render().el);

        },

        addAll: function(){
            this.collection.each(this.addOne, this);
        }


    });


    return view;
});