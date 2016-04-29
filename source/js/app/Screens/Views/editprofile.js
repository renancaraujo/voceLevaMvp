function getExtension(name){
	return name.split('.').pop();
}

function accepted(extension){
	var extensions = ['jpg', 'jpeg', 'png'];
	
	var i;
	for(i = 0; i < extensions.length ;i++){
		if(extension == extensions[i]) return true;
	}
	return false;
}

var controller = function($rootScope, Factory){
	var cd = this;
	cd.user = $rootScope.user;

	var fileinput = document.getElementById("fotoup");
	var reader  = new FileReader();

	reader.onloadend = function () {
		console.log("oi");
   		$rootScope.user.profilePicture  = reader.result;
   		$rootScope.$apply('user');
  	}

	fileinput.addEventListener( 'change', function( e )
	{
		try{
			var fileName = '';
			var extension = '';
			if( this.files && this.files.length > 1 )
				return;

			fileName = e.target.value.split( '\\' ).pop();
			extension = getExtension(fileName);
			if(!accepted(extension)){
				throw new Error("Extensão invalida de arquivo", 4000);
				return;
			}

			reader.readAsDataURL(this.files[0]);


		}catch(e){
			Factory.erro.show(e);
			console.error(e);
		}




	});



	fileinput.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
	fileinput.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });

}
controller.$inject = ['$rootScope', 'Factory'];


var link = function($element){



}
link.$inject = ['$element'];


var diretiva = function(){

	return {
		restrict: 'E',
		templateUrl: "part/editprofile.html",
		controller: controller,
		controllerAs: 'view',
		link: link
	} 
}
diretiva.$inject = [];
module.exports = diretiva;