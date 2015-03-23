/**
 * Created by Sandro
 */
app.controller('LampController', function($scope){
    $scope.mainCtrl.listView = 'app/lamps/lampList.view.html';
    this.groups = [
        {
            id: '1',
            name: 'Wohnzimmer',
            lamps:[
                {id: '1', name: 'Lampe 1', state: 'on', color: '#ff0000'},
                {id: '2', name: 'Lampe 2', state: 'on', color: '#ff0000'},
                {id: '3', name: 'Lampe 3', state: 'on', color: '#ff0000'},
                {id: '4', name: 'Lampe 4', state: 'on', color: '#ff0000'},
                {id: '5', name: 'Lampe 5', state: 'on', color: '#ff0000'}]
        },
        {
            id: '2',
            name: 'Esszimmer',
            lamps:[
                {id: '6', name: 'Lampe 6', state: 'on', color: '#ff0000'},
                {id: '7', name: 'Lampe 7', state: 'on', color: '#ff0000'}]
        },
        {
            id: '3',
            name: 'Schlafzimmer',
            lamps:[
                {id: '8', name: 'Lampe 8', state: 'on', color: '#ff0000'},
                {id: '9', name: 'Lampe 9', state: 'on', color: '#ff0000'},
                {id: '10', name: 'Lampe 10', state: 'on', color: '#ff0000'},
                {id: '11', name: 'Lampe 11', state: 'on', color: '#ff0000'}]
        }
    ]
});