const nodemailer = require("nodemailer");
const sendgridtransport = require("nodemailer-sendgrid-transport");
const fs = require("fs");

// Identificações da minha API
const transporter = nodemailer.createTransport(
     sendgridtransport({
          auth:{
               api_key:"SG.3s6TT7YuTGKn9dDBx5oVew.8blc2zdEBC_miPHqNyU5BBqdi5scj4RYfy36FxWL7KE21773318"
          }
     })
);

// Função que exclui meu relatório HTML
const excluirelatorio = () => {
     try {
          fs.unlinkSync("../index.html");
          console.log("Arquivo excluido com sucesso!");
     } catch(erro) {
          console.log("Houve erro na exclusão do relatório do HTML: " + erro);
     }
}

const enviomail = () => {
     transporter.sendMail({
          to: "lucas.oliveira.estagio@prf.gov.br",
          from: "contatolucasgabriel21@gmail.com",
          subject: "Carros usados na OLX Brasília",
          html:({path: "../index.html"})
     })
}

const main = async () => {
     await enviomail();
     await excluirelatorio();
}

main();
