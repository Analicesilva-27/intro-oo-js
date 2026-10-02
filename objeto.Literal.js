const user = {
    nome:"ana",
    email:"ana@ana.com",
    nascimento: "2009/10/27",
    role:"estudantes",
    ativo:true,
    exibirInfos: function () {
        console.log(this.nome, this.email)
  
  
    }
    }
  
  const admin = {
    nome:"Junior",
    email: "jr@m.com",
    role:"admin",
    criarCurso(){
        console.log('Curso criado!')
  
  
    }
}
//user.exibirInfos()
//const exibir = user.exibirInfos
//exibir()

const exibir = function(){
    console.log(this.nome, this.email)
}

const exibirNome = exibir.bind(user)
exibirNome()
exibir();