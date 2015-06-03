app.controller('MainController', ['$scope', '$route', '$routeParams', '$location', '$http',
    function($scope, $route, $routeParams, $location, $http) {
        this.routeParams = $routeParams;
        this.mainPanelClass = 'hidden-xs';
        this.navigationClass = 'hidden-xs hidden-sm hidden-md';
        this.testMode = false;
        this.password = null;
        this.state = {};
        this.modalView = null;
        this.listView = null;
        this.sidePanelClass = null;


        /**
         * Function to initialize main controller
         */
        this.init = function(){
            this.switchToMainPanel();
            this.loadState();
            //Go to login screen if state is empty
            if(this.state = {}){
                $location.url('/');
            }
        };

        /**
         * Function to navigate to specific target
         */
        this.onNavigateTo = function(url){
            this.setNavVisibility(false);
            $location.url(url);
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
         * If test mode is active load test data
         */
        this.loadState = function () {
            if(this.testMode){
                this.loadTestData();
            }else{
                $http({
                    url: '/rest/',
                    method: "GET",
                    params: {password: 'password'}
                }).success(this.setState).error();
            }
        };

        /**
         * Function set state retrieved from nodejs backend
         * @param data
         * @param status
         * @param headers
         * @param config
         */
        this.setState = function (data, status, headers, config){
            if(data.state){
                //save state to scope
                $scope.mainCtrl.state = data.state;
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
         * @returns {groups}
         */
        this.getGroups = function(){
            if(typeof this.state != 'undefined'){
                return this.state.groups;
            }
        };
        /**
         * Function to get scenes from nodejs backend state
         * @return {scenes}
         */
        this.getScenes = function(){
            if(typeof this.state != 'undefined'){
                return this.state.scenes;
            }
        };

        /**
         * Function to test login
         */
        this.onLogin = function(){
            this.loadState();
            if(this.state != {}){
                $location.url('/lights/');
            }
        };



        /**
         * Function to set test data in state Object
         */
        this.loadTestData = function(){
            this.state = {
                    "connect":{
                        "mongodb":true,
                        "hue":true,
                        "hueRegistered":true,
                        "arduino":false
                    },
                    "appConfig":{
                        "transition":4,
                        "speechSensitivity":20,
                        "speechRecognition":false,
                        "speechRecognitionEngine":"julius",
                        "speechGoogleKey":null,
                        "speechGoogleLanguage":"en-US",
                        "partyMode":false},
                    "config":{
                        "name":"Philips hue",
                        "zigbeechannel":15,
                        "mac":"00:17:88:18:9a:1f",
                        "dhcp":true,
                        "ipaddress":"192.168.2.104",
                        "netmask":"255.255.255.0",
                        "gateway":"192.168.2.1",
                        "proxyaddress":"none",
                        "proxyport":0,
                        "timezone":"Europe/Berlin",
                        "whitelist":{
                            "ea18MGVuiIEQ03XP":{
                                "last use date":"2014-06-17T12:17:00",
                                "create date":"1970-01-01T00:07:22",
                                "name":"philips.lighting.hue#cablebox"
                            },
                            "259d3b54165739235b73655472951472":{
                                "last use date":"2015-03-25T22:57:00",
                                "create date":"2015-03-11T17:56:29",
                                "name":"HTC One_M8"
                            },
                            "3a7e5ff319e7a74f332da2eb1b616ec7":{
                                "last use date":"2015-05-18T05:00:00",
                                "create date":"2015-04-27T10:53:36",
                                "name":"Node.js API",
                                "currentUser":true
                            }
                        },
                        "swversion":"01016441",
                        "apiversion":"1.4.0",
                        "swupdate":{
                            "updatestate":1,
                            "checkforupdate":false,
                            "devicetypes":{
                                "bridge":false,
                                "lights":["6","7"]
                            },
                            "url":"",
                            "text":"HUE0100 lamp 66013452 ",
                            "notify":false
                        },
                        "linkbutton":false,
                        "portalservices":true,
                        "portalconnection":"connected",
                        "portalstate":{
                            "signedon":true,
                            "incoming":true,
                            "outgoing":true,
                            "communication":"disconnected"
                        }
                    },
                    "lights":{
                        "1":{
                            "state":{
                                "on":false,
                                "bri":0, // brightness 0-255
                                "hue":0, //hue color 0-
                                "sat":0, //saturation 0-255
                                "ct":0, //white kelvin 500-153 (2000K - 6500K)
                                "alert":"none",
                                "effect":"none",
                                "colormode":"hs",
                                "reachable":false
                            },
                            "type":"Extended color light",
                            "name":"Küche",
                            "modelid":"LCT001",
                            "uniqueid":"00:17:88:01:00:e1:1e:ff-0b",
                            "swversion":"66010820"},
                        "2":{
                            "state":{
                                "on":true,
                                "bri":254,
                                "ct":369,
                                "alert":"none",
                                "effect":"none",
                                "colormode":"ct",
                                "reachable":false
                            },
                            "type":"Extended color light",
                            "name":"Flur",
                            "modelid":"LCT001",
                            "uniqueid":"00:17:88:01:00:e1:1d:fa-0b",
                            "swversion":"66010820"
                        },
                        "3":{
                            "state":{
                                "on":false,
                                "bri":0,
                                "hue":0,
                                "sat":0,
                                "alert":"none",
                                "effect":"none",
                                "colormode":"hs",
                                "reachable":false
                            },
                            "type":"Extended color light",
                            "name":"Light3",
                            "modelid":"LCT001",
                            "uniqueid":"00:17:88:01:00:d6:92:93-0b",
                            "swversion":"66010820"
                        },
                        "4":{
                            "state":{
                                "on":false,
                                "bri":0,
                                "hue":0,
                                "sat":0,
                                "alert":"none",
                                "effect":"none",
                                "colormode":"hs",
                                "reachable":false
                            },
                            "type":"Extended color light",
                            "name":"Light4",
                            "modelid":"LCT001",
                            "uniqueid":"00:17:88:01:00:b5:a8:38-0b",
                            "swversion":"66010820"
                        },
                        "5":{
                            "state":{
                                "on":false,
                                "bri":0,
                                "hue":0,
                                "sat":0,
                                "alert":"none",
                                "effect":"none",
                                "colormode":"hs",
                                "reachable":false
                            },
                            "type":"Extended color light",
                            "name":"Light5",
                            "modelid":"LCT001",
                            "uniqueid":"00:17:88:01:00:b5:9b:58-0b",
                            "swversion":"66010820"
                        },
                        "6":{
                            "state":{
                                "on":false,
                                "bri":0,
                                "hue":0,
                                "sat":0,
                                "alert":"none",
                                "effect":"none",
                                "colormode":"hs",
                                "reachable":false
                            },
                            "type":"Color light",
                            "name":"LightStrips",
                            "modelid":"LST001",
                            "uniqueid":"00:17:88:01:00:cc:6c:84-0b",
                            "swversion":"66010400"
                        },
                        "7":{
                            "state":{
                                "on":false,
                                "bri":0,
                                "hue":0,
                                "sat":0,
                                "alert":"none",
                                "effect":"none",
                                "colormode":"hs",
                                "reachable":false
                            },
                            "type":"Color light",
                            "name":"LivingColors",
                            "modelid":"LLC011",
                            "uniqueid":"00:17:88:01:00:c4:d9:89-0b",
                            "swversion":"66009461"
                        }
                    },
                    "groups":{
                        "1":{
                            "name":"The Gang (1,2)",
                            "lights":["1","2"],
                            "type":"LightGroup",
                            "action":{
                                "on":true,
                                "bri":254,
                                "hue":14922,
                                "sat":144,
                                "effect":"none",
                                "colormode":"xy"
                            }
                        },
                        "2":{
                            "name":"all lights",
                            "lights":["1","2","3","4","5"],
                            "type":"LightGroup",
                            "action":{
                                "on":false,
                                "bri":0,
                                "hue":0,
                                "sat":0,
                                "effect":"none",
                                "colormode":"xy"
                            }
                        },
                        "3":{
                            "name":"Light1,3",
                            "lights":["1","3"],
                            "type":"LightGroup",
                            "action":{
                                "on":false,
                                "bri":0,
                                "hue":0,
                                "sat":0,
                                "effect":"none",
                                "colormode":"xy"
                            }
                        },
                        "4":{
                            "name":"Magenta",
                            "lights":["1","2","3","4","5"],
                            "type":"LightGroup",
                            "action":{
                                "on":false,
                                "bri":0,
                                "hue":0,
                                "sat":0,
                                "effect":"none",
                                "colormode":"xy"}
                        }
                    },
                    "sensors":{},
                    "favorites":{},
                    "scenes":{
                        //1:{name:"Test Scene"}
                    },
                    "automation":{},
                    "devices":{},
                    "party":{},
                    "rfid":{}
            };
        };

        this.init();
    }
]);