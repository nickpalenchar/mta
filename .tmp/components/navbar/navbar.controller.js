'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var NavbarController =
//end-non-standard

function NavbarController() {
  _classCallCheck(this, NavbarController);

  this.menu = [{
    'title': 'New Check-up',
    'state': 'main'
  }];
  this.isCollapsed = true;
};

angular.module('programmingWorkApp').controller('NavbarController', NavbarController);

//start-non-standard
//# sourceMappingURL=navbar.controller.js.map
