/**
 * Lamp Controller
 */
app.controller('LightController', function($scope, $routeParams) {
    this.routeParams = $routeParams;
    this.editMode = false;
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

        if(typeof this.routeParams.lightName != 'undefined' && this.routeParams.lightName != null ){
            $scope.mainCtrl.switchToMainPanel();
        }

        this.detectSelectedLight();
        this.createColorPicker();
    };

    this.detectSelectedLight = function(){
        for(var i in this.lights){
            if(i === this.routeParams.lightId){
                this.light = this.lights[i];
            }
        }
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
                labels:{
                    hslhue: '',
                    hslsaturation: '',
                    hsllightness: ''
                },
                size: 'large',
                flat: true,
                sliders: true,
                swatches: false,
                hsvpanel: false,
                order: {
                    hsl: 1
                },
                connectedinput: "#color",
                onchange: this.onColorSelected
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

    this.onColorSelected = function(container, color){
        $('#lamp-color').css('background-color', '#' + color.tiny.toHex());
        if(typeof $scope.lightCtrl != 'undefined' && $scope.lightCtrl.light != {} && $scope.lightCtrl.light != null){
            $scope.lightCtrl.light.color = color.tiny.toHex();
        }

    };

    this.init();
});