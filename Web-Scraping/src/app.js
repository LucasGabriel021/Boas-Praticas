//console.log("Olá");

/**
 * Link site alvo: "https://df.olx.com.br/?q=alexia";
 * Nome do produto: Alexia Echo;
 * Valor do produto: R$ 200;
 * Divulgação do produto: Publicado em 14/12/2022;
 * Código do produto: 73833303;
 * Link página produto: "https://df.olx.com.br/distrito-federal-e-regiao/audio-tv-video-e-fotografia/alexia-echo-show-5-novo-lacrado-c-garantia-1095382958?lis=listing_no_category";
 * Média de preço dos produtos: 3/10
 */

/**
 * Script para extrair dados de uma página alvo e documentar em um HTML
 */

 // Biblioteca de Requisição
 const axios = require('axios');
 // Bibliotea implementa o jQuery no projeto
 const cheerio = require('cheerio');

 const fs = require('fs');

 const siteAlvo = "https://df.olx.com.br/?q=alexia";
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
 const linkFilha = 'https://df.olx.com.br/distrito-federal-e-regiao/audio-tv-video-e-fotografia/alexia-echo-show-5-novo-lacrado-c-garantia-1095382958?lis=listing_no_category';

 const matrizValores = [];
 let soma = 0, media = 0;

 const coletaDados = async (pg) => {
     try {
          const req = await axios.get(pg);
          const html = req.data;
          const $ = await cheerio.load(html);
          let nomeProduto = $("#content > div.ad__sc-18p038x-2.djeeke > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div.ad__duvuxf-0.ad__h3us20-0.eCUDNu > div.ad__h3us20-6.kpXGyY > div > div > h1").text();
          let valorProduto = $("#content > div.ad__sc-18p038x-2.djeeke > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div.ad__duvuxf-0.ad__h3us20-0.hwQusK > div.ad__h3us20-6.dcVYod > div > div > div.sc-cBdUnI.hzLoVM > div > h2.ad__sc-12l420o-1.cuGsvO.sc-clNaTc.evYyVa").text();
          let codigoProduto = $("#content > div.ad__sc-18p038x-2.djeeke > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div.ad__duvuxf-0.ad__h3us20-0.eCUDNu > div.ad__h3us20-6.hQCBiM > div > div > div > span.ad__sc-16iz3i7-0.bTSFxO.sc-ifAKCX.fizSrB").text();
          let dataPublicProduto = $("#content > div.ad__sc-18p038x-2.djeeke > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div.ad__duvuxf-0.ad__h3us20-0.eCUDNu > div.ad__h3us20-6.hQCBiM > div > div > div > span.ad__sc-1oq8jzc-0.hSZkck.sc-ifAKCX.fizSrB").text();
          
          matrizValores.push(parseFloat(valorProduto));
          for(let count = 0; count < matrizValores.length; count++) {
               soma += matrizValores[count];
          }
          console.log(matrizValores);

          const resultado = `
               <h1>Nome do Produto: ${nomeProduto}</h1>
               <h3>Velor do Produto: ${valorProduto}</h3>
               <h3>Código do Produto: ${codigoProduto}</h3>
               <h3>Data da Publicação: ${dataPublicProduto}</h3>
               <h3>Link da Página do Produto: <a href="${pg}">Produto</a></h3>
               <br>
          `

          console.log(media = soma / matrizValores.length);
          //console.log(resultado);
          gravaHtml(resultado);
     } catch (erro) {
          console.log("Deu problema na coleta dos dados: " + erro);
     }
 }

 //coletaDados(linkFilha);

 const gravaHtml = async (resultado) => {
     fs.writeFileSync('./index.html', resultado, {flag: 'a+'}, function(erro) {
          if(erro) {
               console.log("Deu erro na geração do HTML: " + erro);
          }
     });
 }

 //coletaDados(linkFilha);

 const apresentaDdados = async () => {
     const todosLinks = await listaLinks();
     todosLinks.map(function(links) {
          coletaDados(links);
     })
 }

 const main = async () => {
     await apresentaDdados();
 }

 main();