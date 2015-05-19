/**
 * Lamp Controller
 */
app.controller('LightController', function($scope, $routeParams) {
    this.routeParams = $routeParams;
    this.groups = null;
    this.lights = null;
    this.light = null;

    /**
     * Function to initialize the light controller
     */
    this.init = function(){
        $scope.mainCtrl.listView = 'app/lights/lightList.view.html';
        this.lights = $scope.mainCtrl.getLights();
        this.groups = $scope.mainCtrl.getGroups();

        if(typeof this.showAllLights === 'undefined'){
            this.showAllLights = true;
        }

        for(var i in this.lights){
            if(this.lights[i].name === this.routeParams.lightName){
                this.light = this.lights[i];
            }
        }

        this.createColorPicker();

    };

    /**
     * Function to create the color picker slider
     */
    this.createColorPicker = function(){
        var colorPicker = $('#colorPicker');
        if(!colorPicker.children().length) {
            //http://www.virtuosoft.eu/code/bootstrap-colorpickersliders/
            colorPicker.ColorPickerSliders({
                color: 'rgb(255, 0, 0)',
                size: 'large',
                flat: true,
                sliders: true,
                swatches: false,
                hsvpanel: false,
                order: {
                    hsl: 1
                }
            });
        }
    };

    /**
     * Function to show or hide the all Lamps group
     */
    this.onToggleAllLights = function(){
        if(typeof this.showAllLights === 'undefined'){
            this.showAllLights = true;
        }else{
            this.showAllLights = !this.showAllLights;
        }
    };

    /**
     * Function to show or hide the list of lights in a group
     * @param group Light group
     */
    this.onToggleShowGroup = function(group){
        if(typeof group.show === 'undefined'){
            group.show = true;
        }else{
            group.show = !group.show;
        }
    };

    this.init();
});