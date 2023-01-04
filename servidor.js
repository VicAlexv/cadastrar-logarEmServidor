var express = require("express");
var http = require("http");
var bodyParser = require("body-parser")

var login_cadastra
var senha_cadastra

var app = express()
app.set("view engine", "ejs")
app.set("views", "./views")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static("./public"))

app.get("/cadastrar", function (req,resp){
    resp.render("cadastrar")
})

app.get("/", function (req,resp){
    resp.render("logar")
})

app.get("/login", function (req,resp){
    resp.render("logar")
})

app.post("/cadastrar", function (req,resp){
    login_cadastra = req.body.login
    senha_cadastra = req.body.senha
    resp.write("Cadastrado com sucesso!")
    resp.end()
})

app.post("/login", function (req,resp){
    var login = req.body.login
    var senha = req.body.senha
    if(login === login_cadastra && senha === senha_cadastra){
        let mensagem = "Sucesso!"
        resp.render("resposta",{login, mensagem})
    }
    else{
        let mensagem = "Falha!"
        resp.render("resposta",{login, mensagem})
    }
})
var servidor = http.createServer(app)
servidor.listen(8080)

console.log("Servidor rodando...")