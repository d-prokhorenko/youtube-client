import { FormControl } from '@angular/forms';

interface Errors {
  length?: string;
  upperLower?: string;
  letNum?: string;
  special?: string;
}

export class MyValidator {
  static password(control: FormControl): Errors | null {
    const errors: Errors = {};
    if (control.value.length < 8) {
      errors.length = '- at least 8 characters';
    }
    if (
      !control.value.match(new RegExp('[A-Z]')) ||
      !control.value.match(new RegExp('[a-z]'))
    ) {
      errors.upperLower = '- a mixture of both uppercase and lowercase letters';
    }
    if (
      !control.value.match(new RegExp('[0-9]')) ||
      !control.value.match(new RegExp('[A-Fa-f]'))
    ) {
      errors.letNum = '- a mixture of letters and numbers';
    }
    if (!control.value.match(new RegExp('[\\,\\!\\@\\#\\?\\]]'))) {
      errors.special =
        '- inclusion of at least one special character, e.g., ! @ # ? ]';
    }
    return Object.keys(errors).length == 0 ? null : errors;
  }

  static url(control: FormControl): { [key: string]: boolean } | null {
    const regExp =
      /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
    if (!regExp.test(control.value)) {
      return {
        url: true,
      };
    }
    return null;
  }
}
