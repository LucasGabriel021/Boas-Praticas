import { View } from "./view.js";
export class NegociacoesView extends View {
    template(modelo) {
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
                                   </tr>`;
        }).join("")}
                    </tbody>
               </table>
          `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
