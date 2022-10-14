export abstract class View<T> { // Cria-se um generic para utilizar vários tipos em nosso template e update
     protected elemento: HTMLElement; // Modificador de acesso protected ele permite classes filhas utilizarem meu atributo
     private escapar = false;
     constructor(seletor: string, escapar: boolean) { // O constructor irá receber nosso seletor
          this.elemento = document.querySelector(seletor);
     }

     protected abstract template(modelo: T): string; // Palavra reservada abstract ela diz para as classes filhas que obrigatóriamente terão que implementar o método template

     public update(modelo: T): void {
          let template: string = this.template(modelo);
          if(this.escapar) {
               template = template.replace(/<script>[\s\S]*?<script>/, '');
          }
          this.elemento.innerHTML = template;
     }
}