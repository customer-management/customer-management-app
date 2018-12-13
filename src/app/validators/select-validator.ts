import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[selectValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SelectValidator,
    multi: true
  }]
})
export class SelectValidator implements Validator {
  @Input('fieldName') fieldName: string;
  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    let errorMsg;
    const val = control.value ? control.value : '';
    if (val === 'NULL') {
      errorMsg = 'Please select a ' + this.fieldName + ' from the list.';
    } else {
      return null;
    }
    const error = {'errorMessage' : errorMsg};
    return error;
  }

}
