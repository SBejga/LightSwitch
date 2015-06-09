/**
 * Created by Sandro
 */
app.controller('SettingsController', function($scope, $http){
    this.settings = $scope.mainCtrl.getSettings();
    this.oldPassword = null;
    this.repPassword = null;
    this.newPassword = null;

    this.init = function(){
        $scope.mainCtrl.listView = 'app/settings/submenu.view.html';

    };

    this.onChangePassword = function(){
        if(this.oldPassword === null || this.oldPassword === ''){

        }else if(this.newPassword === null || this.newPassword === ''){

        }else if(this.newPassword === null || this.newPassword === ''){

        }else if(this.newPassword !== this.repPassword){

        }else{
            $http({
                url: '/rest/config.password',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {password: this.password},
                data: {
                    'oldPassword': this.oldPassword,
                    'newPassword': this.newPassword
                }
            }).success(this.changePassword).error();
        }
    };

    this.changePassword = function(data, status, headers, config){
        console.log(data);
        console.log(status);
        $scope.mainCtrl.password = this.newPassword;

        this.oldPassword = null;
        this.newPassword = null;
        this.repPassword = null;
    };

    this.showMessage = function(){

    };

    this.init();
});