import { Directive } from '@angular/core';

/**
 * Generated class for the MyAgeDiretiveDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[my-age-diretive]' // Attribute selector
})
export class MyAgeDiretiveDirective {

  constructor() {
    console.log('Hello MyAgeDiretiveDirective Directive');
  }

}
