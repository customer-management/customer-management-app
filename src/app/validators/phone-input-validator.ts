import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[phoneInputValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PhoneInputValidator,
    multi: true
  }]
})
export class PhoneInputValidator implements Validator {
  @Input('fieldName') fieldName: string;
  @Input('required') required: boolean;

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    let errorMsg;
    const val = control.value ? control.value : '';
    if (this.required && val.length === 0) {
      errorMsg = 'Please enter a valid phone number.';
    } else {
      if (isNaN(val)) {
        // console.log('Contains letter');
        errorMsg = this.fieldName + ' can only contain numbers.';
      } else if (val.length < 8) {
        errorMsg = this.fieldName + ' should contain minimum 8 numbers.';
        // console.log('Not enough characters');
      } else {
        return null;
      }
    }
    const error = {'errorMessage' : errorMsg};
    return error;
  }
}
