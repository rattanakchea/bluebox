/*global define*/
define([
    'underscore',
    'backbone',
    '../models/dvd'
], function (_, Backbone, DvdModel) {
    'use strict';

    var testData = [
        { title: 'The Conjuring 2', image: 'img/1.jpg'},
        { title: 'The Darkness', image: 'img/2.jpg'},
        { title: 'The Shallows', image: 'img/3.jpg'},
        { title: 'Free State of Jones', image: 'img/4.jpg'}

        ];


    return {

        // return an array of tested data
        generateTestData: function(count){
            count = count || 1;

            if (count == 1){
                return testData[0];
            }

            var arr = [];
            for (var i=0; i < count; i++){
                i = i % testData.length;
                testData[i].id = i;
                arr.push(testData[i]);
            }

            return arr;

        },


        getDvdModel: function(){
            return new DvdModel(testData);
        }



    }

});