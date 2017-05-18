app.config(function($routeProvider) {
	$routeProvider
	.when("/alaska", {
		templateUrl: "partials/alaska.html",
		controller: "AlaskaCtrl"
	})
	.when("/panAmerican",  {
		templateUrl: "partials/panAmerican.html",
		controller: "PanAmericanCtrl"
	})
	.otherwise("/alaska");
});