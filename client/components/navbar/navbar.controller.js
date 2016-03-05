'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'New Check-up',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('programmingWorkApp')
  .controller('NavbarController', NavbarController);
