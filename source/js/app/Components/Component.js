module.exports = function(modulo, set){
	var construtor = function(obj){
		this.name = obj.name;
		this.directive = obj.directive;
		modulo.directive(this.name, this.directive);

		set[obj.name] = this;	
	}
	return construtor;
}