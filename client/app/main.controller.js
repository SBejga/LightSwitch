app.controller('MainController', ['$route', '$routeParams', '$location',
    function($scope, $route, $routeParams, $location, $http) {
        this.testMode = false;
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

        this.testState = {
            "area":"",
            "state":{
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
                        "ffffffffd08fe29e003cb337003cb337":{
                            "last use date":"2014-03-27T16:37:00",
                            "create date":"2014-03-27T16:21:21",
                            "name":"PhilipsHueAndroidApp#HUAWEI Ascend Y300"
                        },
                        "2188642d233276e733eb6ee91b901d03":{
                            "last use date":"2014-05-26T20:30:00",
                            "create date":"2014-05-26T17:22:42",
                            "name":"Node.js API"
                        },
                        "367bb2d4acf5c8f253f6cfc18cf6df7":{
                            "last use date":"2014-05-18T19:56:00",
                            "create date":"2014-04-08T15:34:37",
                            "name":"Node.js API"
                        },
                        "15e0982ab99837261136963318a153":{
                            "last use date":"2014-04-24T10:55:00",
                            "create date":"2014-01-16T16:59:22",
                            "name":"Node.js API"
                        },
                        "365573615463b6719ba019a1908aa7b":{
                            "last use date":"2014-04-11T13:07:00",
                            "create date":"2014-04-11T08:35:15",
                            "name":"Node.js API"
                        },
                        "5a2bea5935b3a735dbc67139c3ded3":{
                            "last use date":"2014-06-16T20:45:00",
                            "create date":"2014-05-08T20:19:45",
                            "name":"Node.js API"
                        },
                        "1ede3b75c03f8e78f9624121d50013":{
                            "last use date":"2014-12-17T22:20:00",
                            "create date":"2014-06-08T13:29:06",
                            "name":"Node.js API"
                        },
                        "341a9a2e31cbb272ce829422f8e854b":{
                            "last use date":"2014-06-09T18:59:00",
                            "create date":"2014-06-09T16:00:51",
                            "name":"Node.js API"
                        },
                        "256238a72c8b351f2d9282973472010f":{
                            "last use date":"2014-06-16T17:35:00",
                            "create date":"2014-06-16T14:02:10",
                            "name":"Node.js API"
                        },
                        "ea18MGVuiIEQ03XP":{
                            "last use date":"2014-06-17T12:17:00",
                            "create date":"1970-01-01T00:07:22",
                            "name":"philips.lighting.hue#cablebox"
                        },
                        "ffffffffecefc803ffffffffb4deadad":{
                            "last use date":"2015-03-19T23:05:00",
                            "create date":"2014-11-12T12:14:30",
                            "name":"Hue#HTC One_M8"
                        },
                        "259d3b54165739235b73655472951472":{
                            "last use date":"2015-03-25T22:57:00",
                            "create date":"2015-03-11T17:56:29",
                            "name":"HTC One_M8"
                        },
                        "3dd7b4f212c77e1f9d4c5c09f4d9ff":{
                            "last use date":"2015-04-13T14:21:00",
                            "create date":"2015-04-13T14:21:56",
                            "name":"Node.js API"
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
                            "bri":0,
                            "hue":0,
                            "sat":0,
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
                "scenes":{},
                "automation":{},
                "devices":{},
                "party":{},
                "rfid":{}
            }
        };

        this.init();
    }
]);