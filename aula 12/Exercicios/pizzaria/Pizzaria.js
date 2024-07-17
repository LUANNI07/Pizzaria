var saborPizza;
(function (saborPizza) {
    saborPizza["frango"] = " frango com catupiry";
    saborPizza["calabresa"] = "calabresa";
    saborPizza["queijo"] = "4 queijos";
    saborPizza["chocolate"] = " chocolate com mm";
    saborPizza["sorvete"] = "sorvete de flocos ";
})(saborPizza || (saborPizza = {}));
console.log(saborPizza.frango);
console.log(saborPizza.calabresa);
console.log(saborPizza.chocolate);
console.log(saborPizza.sorvete);
var pizza = /** @class */ (function () {
    function pizza(tamanho, preco) {
        this.preco = preco;
        this.tamanho = tamanho;
    }
    pizza.prototype.pizza = function () {
        return "A pizza ".concat(saborPizza, " e  tem ").concat(this.tamanho, " e custa ").concat(this.preco);
    };
    return pizza;
}());
console.log("A pizza ".concat(saborPizza, " e  tem ").concat(this.tamanho, " e custa ").concat(this.preco));
