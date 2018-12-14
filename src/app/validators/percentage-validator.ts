import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[percentageValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PercentageValidator,
    multi: true
  }]
})
export class PercentageValidator implements Validator {
  @Input('maxPercentage') maxPercentage: number;
  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const val = control.value ? control.value : '';
    if (val < 0) {
      return {'errorMessage': 'Discount % cannot be negative.'};
    }
    if (val > this.maxPercentage) {
      return {'errorMessage': 'Cannot exceed max allowed discount of ' + this.maxPercentage + '%.'};
    }
    return null;
  }
}
