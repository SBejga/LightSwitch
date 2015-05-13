app.controller('MainController', ['$route', '$routeParams', '$location',
    function($scope, $route, $routeParams, $location) {
        this.testMode = true;
        this.state = {};
        this.routeParams = $routeParams;
        this.listView = '';
        this.sidePanelClass = '';
        this.mainPanelClass = 'hidden-xs';
        this.navigationClass = 'hidden-xs hidden-sm hidden-md';

        /**
         * Function to initialize main controller
         */
        this.init = function(){
            if(!this.testMode){
                this.loadState();
            }else{
                this.loadTestData();
            }
        };

        /**
         * Switch CSS Classes to display side panel
         */
        this.switchToSidePanel = function(){
            this.sidePanelClass = '';
            this.mainPanelClass = 'hidden-xs';
        };

        /**
         * Switch CSS Classes to display main panel
         */
        this.switchToMainPanel = function(){
            this.sidePanelClass = 'hidden-xs';
            this.mainPanelClass = '';
        };

        /**
         * Switch CSS Classes to display navigation panel
         */
        this.setNavVisibility = function(visible){
            if(this.navigationClass === '' || !visible ){
                this.navigationClass = 'hidden-xs hidden-sm hidden-md';
            }else{
                this.navigationClass = '';
            }
        };

        /**
         * Load state from hue
         */
        this.loadState = function () {
            $http({
                url: '/rest/',
                method: "GET",
                params: {password: 'password'}
            }).success(this.setState).error();
        };

        /**
         * Function set state retrieved from nodejs backend
         * @param data
         * @param status
         * @param headers
         * @param config
         */
        this.setState = function (data, status, headers, config){
            console.log(data);
            if(data.state){
                //save state to scope
                this.state = data.state;
            }
        };

        /**
         * Function to get light list from nodejs backend state
         * @returns {lights}
         */
        this.getLights = function(){
            if(typeof this.state != 'undefined'){
                return this.state.lights;
            }
        };
        /**
         * Function to get list of light groups from nodejs backend state
         * @returns {lights}
         */
        this.getGroups = function(){
            if(typeof this.state != 'undefined'){
                return this.state.groups;
            }
        };



        /**
         * Function to set test data in state Object
         */
        this.loadTestData = function(){
            this.state.groups = [
                {
                    id: '1',
                    name: 'Wohnzimmer',
                    lights:[
                        {id: '1', name: 'Lampe 1', state: 'on', color: '#ff0000'},
                        {id: '2', name: 'Lampe 2', state: 'on', color: '#ff0000'},
                        {id: '3', name: 'Lampe 3', state: 'on', color: '#ff0000'},
                        {id: '4', name: 'Lampe 4', state: 'on', color: '#ff0000'},
                        {id: '5', name: 'Lampe 5', state: 'on', color: '#ff0000'}]
                },
                {
                    id: '2',
                    name: 'Esszimmer',
                    lights:[
                        {id: '6', name: 'Lampe 6', state: 'on', color: '#ff0000'},
                        {id: '7', name: 'Lampe 7', state: 'on', color: '#ff0000'}]
                },
                {
                    id: '3',
                    name: 'Schlafzimmer',
                    lights:[
                        {id: '8', name: 'Lampe 8', state: 'on', color: '#ff0000'},
                        {id: '9', name: 'Lampe 9', state: 'on', color: '#ff0000'},
                        {id: '10', name: 'Lampe 10', state: 'on', color: '#ff0000'},
                        {id: '11', name: 'Lampe 11', state: 'on', color: '#ff0000'}]
                }
            ];

            this.state.lights = {
                1: {id: '1', name: 'Lampe 1', state: 'on', color: '#ff0000'},
                2: {id: '2', name: 'Lampe 2', state: 'on', color: '#ff0000'},
                3: {id: '3', name: 'Lampe 3', state: 'on', color: '#ff0000'},
                4: {id: '4', name: 'Lampe 4', state: 'on', color: '#ff0000'},
                5: {id: '5', name: 'Lampe 5', state: 'on', color: '#ff0000'},
                6: {id: '6', name: 'Lampe 6', state: 'on', color: '#ff0000'},
                7: {id: '7', name: 'Lampe 7', state: 'on', color: '#ff0000'},
                8: {id: '8', name: 'Lampe 8', state: 'on', color: '#ff0000'},
                9: {id: '9', name: 'Lampe 9', state: 'on', color: '#ff0000'},
                10: {id: '10', name: 'Lampe 10', state: 'on', color: '#ff0000'},
                11: {id: '11', name: 'Lampe 11', state: 'on', color: '#ff0000'}
            };
        };

        this.init();
    }
]);