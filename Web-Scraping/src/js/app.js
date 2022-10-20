//console.log("Olá");

/**
 * Link site alvo: "https://df.olx.com.br/autos-e-pecas/carros-vans-e-utilitarios";
 * Nome do produto: Carros Para Venda;
 * Valor do produto: R$ 200;
 * Divulgação do produto: Publicado em 14/12/2022;
 * Tempo de publicação
 * Código do produto: 73833303;
 * Link página produto: "https://df.olx.com.br/distrito-federal-e-regiao/audio-tv-video-e-fotografia/alexia-echo-show-5-novo-lacrado-c-garantia-1095382958?lis=listing_no_category";
 */

/**
 * Script para extrair dados de uma página alvo e documentar em um HTML
 */

 // Biblioteca de Requisição
 const axios = require('axios');
 // Biblioteca implementa o jQuery no projeto
 const cheerio = require('cheerio');
 // Biblioteca para manipulação de arquivo
 const fs = require('fs');

 const siteAlvo = "https://df.olx.com.br/autos-e-pecas/carros-vans-e-utilitarios";
 const dados = [];

 const dadosBrutos = async () => {
     try {
          const resposta = await axios.get(siteAlvo);
          //console.log(resposta.data);
          return resposta.data;
     } catch(erro) {
          console.log("Deu erro ao extrair os dados brutos: " + erro);
     }
 }

 //dadosBrutos();

 const listaLinks = async () => {
     const html = await dadosBrutos();
     const $ = await cheerio.load(html);
     $(".sc-12rk7z2-1").each(function(i, link) {
          dados[i] = $(link).attr("href");
     });
     //console.log(dados);
     return dados;
 }

 //listaLinks();
 //const linkFilha = 'https://df.olx.com.br/distrito-federal-e-regiao/autos-e-pecas/carros-vans-e-utilitarios/chevrolet-spin-1-8-lt-8v-flex-4p-automatico-1098308977?lis=listing_2020';
 
 const dataAtual = Date.now();
 const dataTeste = new Date(dataAtual);
 //console.log(dataTeste)
 const anoAtual = dataTeste.getFullYear();
 const mesAtual = parseInt(dataTeste.getMonth()) + 1;
 //console.log(mesAtual);
 const diaAtual = dataTeste.getDate();
 //console.log(diaAtual);
 const dataAtualFormat = `${anoAtual}-${mesAtual.toString()}-${diaAtual}`;
 //console.log(dataAtualFormat);

 const coletaDados = async (pg) => {
     try {
          const req = await axios.get(pg);
          const html = req.data;
          const $ = await cheerio.load(html);
          let nomeProduto = $("#content > div.ad__sc-18p038x-2.djeeke > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div.ad__duvuxf-0.ad__h3us20-0.eCUDNu > div.ad__h3us20-6.iFvUie > div > div > div > div > h1").text();
          let valorProduto = parseFloat($("#content > div.ad__sc-18p038x-2.djeeke > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div.ad__duvuxf-0.ad__h3us20-0.hwQusK > div.ad__h3us20-6.dcVYod > div > div > div.sc-cBdUnI.hzLoVM > div > h2.ad__sc-12l420o-1.cuGsvO.sc-clNaTc.evYyVa").text());
          let codigoProduto = $("#content > div.ad__sc-18p038x-2.djeeke > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div.ad__duvuxf-0.ad__h3us20-0.eCUDNu > div.ad__h3us20-6.hQCBiM > div > div > div > span.ad__sc-16iz3i7-0.bTSFxO.sc-ifAKCX.fizSrB").text();
          let dataPublicProduto = $("#content > div.ad__sc-18p038x-2.djeeke > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div.ad__duvuxf-0.ad__h3us20-0.eCUDNu > div.ad__h3us20-6.hQCBiM > div > div > div > span.ad__sc-1oq8jzc-0.hSZkck.sc-ifAKCX.fizSrB").text();
          
          let dataPublic = dataPublicProduto.slice(13,18);
          let anoPublic = 2022;
          let mesPublic = dataPublic.slice(3,5);
          let diaPublic = dataPublic.slice(0,2);
          let dataPublicFinalizada = `${anoPublic.toString()}-${mesPublic}-${diaPublic}`;

          const diferencaMeses = (new Date(dataAtualFormat) - new Date(dataPublicFinalizada));
          const diferencaDias = diferencaMeses / (100 * 60 * 60 * 24);
          
          const resultado = `
               <h1>Nome do Produto: ${nomeProduto}</h1>
               <h3>Velor do Produto: ${valorProduto}</h3>
               <h3>Código do Produto: ${codigoProduto}</h3>
               <h3>Data da Publicação: ${dataPublicProduto}</h3>
               <h3>Dias desde a publicação: ${diferencaDias}</h3>
               <h3>Link da Página do Produto: <a href="${pg}">Link do Produto</a></h3>
               <br>
          `

          //console.log(dataPublic);
          //console.log(dataPronta);
          //console.log(diferencaDias);

          //console.log(resultado);
          gravarHtml(resultado);
     } catch(erro) {
          console.log("Deu problema na coleta dos dados: " + erro);
     }
 }

 //coletaDados(linkFilha);

 const gravarHtml = async (resultado) => {
     fs.writeFileSync("../index.html", resultado, {flag: 'a+'}, function(erro){
          if(erro) {
               console.log("Deu erro ao gerar o HTML dos resultados: " + erro);
          }
     });
 }

 //coletaDados(linkFilha);
 
 const apresentaDados = async () => {
     const todosLinks = await listaLinks();
     todosLinks.map((linksFilhos) => {
          coletaDados(linksFilhos);
     });
 }

 const main = async () => {
     await apresentaDados();
 }

 main();
