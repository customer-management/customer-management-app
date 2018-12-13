import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[textInputValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: TextInputValidator,
    multi: true
  }]
})
export class TextInputValidator implements Validator {
  @Input('minLength') minLength: number
  @Input('fieldName') fieldName: string;
  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    let errorMsg;
    const val = control.value ? control.value : '';
    const firstChar = val.toString().substring(0, 1);
    if (this.isNumber(firstChar)) {
      errorMsg = this.fieldName + ' must start with a letter.';
    } else if (val.toString().length < this.minLength) {
      errorMsg = this.fieldName + ' must be ' + this.minLength + ' of characters long.';
    } else {
      return null;
    }
    const error = {'errorMessage' : errorMsg};
    return error;
  }
  isNumber(input: string) {
    return input.match('\\d') && input.match('\\d').length > 0;
  }
}
