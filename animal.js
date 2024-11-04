class Animal{
    constructor(nome){
        this.nome = nome;
}

exibirNome(){
    console.log(this.nome);
}

}
let animal = new animal("kobe");
animal.exibirNome();
new animal("mel").exibirNome();
