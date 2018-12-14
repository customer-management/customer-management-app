import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[quantityValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: QuantityValidator,
    multi: true
  }]
})
export class QuantityValidator implements Validator {
  @Input('maxQuantity') maxQuantity: number;
  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const val = control.value ? control.value : '';
    if (val < 1) {
      return {'errorMessage': 'Quantity cannot be negative or zero.'};
    }
    if (val > this.maxQuantity) {
      return {'errorMessage': 'Cannot exceed max stock quantity of ' + this.maxQuantity + '.'};
    }
    return null;
  }
}
