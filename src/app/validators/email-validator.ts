import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[emailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidator,
    multi: true
  }]
})
export class EmailValidator implements Validator {
  @Input('minLength') minLength: number
  @Input('fieldName') fieldName: string;
  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    let errorMsg;
    const val = control.value ? control.value : '';

    if (val.trim().length === 0) {
      return {'errorMessage' : this.fieldName + ' is a required field. Please enter a valid Email.'};
    }
    const indexOfAt = val.indexOf('@');
    // console.log('indexOfAt', indexOfAt);
    const userName = val.substring(0, indexOfAt);
    const remainingString = val.substring(indexOfAt + 1, val.length);

    const indexOfDot = remainingString.indexOf('.');
    // console.log('indexOfDot', indexOfDot);
    const secondLevelDomain = indexOfDot < 0 ? remainingString : remainingString.substring(0, indexOfDot);
    // console.log('username, second level domain ', userName, secondLevelDomain);
    const topLevelDomain = indexOfDot < 0 ? '' : remainingString.substring(indexOfDot, remainingString.length);
    // console.log('topLevelDomain ', topLevelDomain);

    if (indexOfAt < 4) {
      errorMsg = 'Invalid email. Email ID should be in the format \'username@domain.com\'.';
    } else if (this.hasInvalidCharacter(userName) || this.hasInvalidCharacter(secondLevelDomain)
      || this.hasInvalidCharacter(topLevelDomain)) {
      errorMsg = 'Email address contains invalid characters. e.g., !, $, #, % etc.';
    } else if (!isNaN(val.substring(0, 1))) {
      errorMsg = 'Email address cannot start with a number';
    } else if (!isNaN(secondLevelDomain.substring(0, 1)) || secondLevelDomain.length < 3) {
      errorMsg = 'Invalid second level domain name.';
    } else if (topLevelDomain.length > 0 && !isNaN(topLevelDomain)) {
      errorMsg = 'Invalid top level domain name.';
    } else {
      return null;
    }
    const error = {'errorMessage' : errorMsg};
    return error;
  }

  private hasInvalidCharacter(val: string): boolean {
    const invalidCharactersList = ['!', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '/', '\\', '~', '`', '<', '>', ',', ';', ':'
      , '"', '\'', '@', ' '];

    for (let i = 0; i < invalidCharactersList.length; i++) {
      if (val.indexOf(invalidCharactersList[i]) > -1) {
        return true;
      }
    }
    return false;
  }
}
