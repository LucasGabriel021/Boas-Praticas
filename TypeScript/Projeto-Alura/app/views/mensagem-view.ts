     import { View } from "./view.js";

     export class MensagemView extends View<string>{

          protected template(mensagem: string): string {
               return `
                    <p class="alert alert-info">${mensagem}</p>
               `;
          }

     }