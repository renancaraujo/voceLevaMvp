module.exports = function(funcao, objeto) {
	return function() {
		return funcao.apply(objeto, arguments)
	}
}
