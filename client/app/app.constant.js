(function(angular, undefined) {
  angular.module("programmingWorkApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);