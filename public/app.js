angular.module('ngDesigners', [])
    .controller('MainController', function(){

        this.item = {
            name: 'Name',
            description: 'Description'
        }

        this.items = [
            {
                name: "fluffy",
                description: "mangy"
            },
            {
                name: "fluffy",
                description: "mangy"
            },
            {
                name: "fluffy",
                description: "mangy"
            },
            {
                name: "fluffy",
                description: "mangy"
            }
        ];

    });