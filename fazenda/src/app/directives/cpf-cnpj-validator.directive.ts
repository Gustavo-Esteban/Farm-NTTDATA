import { Directive } from '@angular/core';
import { cpf, cnpj } from 'cpf-cnpj-validator';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appCpfCnpjValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CpfCnpjValidatorDirective,
      multi: true,
    },
  ],
})
export class CpfCnpjValidatorDirective implements Validator{

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const cpfCnpj = control.value;

    const isValidCpf = cpf.isValid(cpfCnpj);

    if (isValidCpf) {
      return null;
    }

    const isValidCnpj = cnpj.isValid(cpfCnpj);

    if (isValidCnpj) {
      return null;
    }

    return { cpfCnpjValidation: true };
  }

}
