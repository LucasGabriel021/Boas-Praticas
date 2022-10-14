import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
     
     protected template(modelo: Negociacoes): string { // Template é o único metódo que retorna uma string, ou seja minha string HTML
          return `
               <table class="table table-hover table-bordered">
                    <thead>
                         <tr>
                              <th>DATA</th>
                              <th>QUANTIDADE</th>
                              <th>VALOR</th>
                         </tr>
                    </thead>
                    <tbody>
                         ${modelo.lista().map((e) => {
                              return `  
                                   <tr>
                                         <td>${this.formatar(e.data)}</td>                             
                                         <td>${e.quantidade}</td>                             
                                         <td>${e.valor}</td>                             
                                   </tr>`
                         }).join("")}
                    </tbody>
               </table>
          `;
     }

     private formatar(data: Date): string {
          return new Intl.DateTimeFormat().format(data);
     }

}