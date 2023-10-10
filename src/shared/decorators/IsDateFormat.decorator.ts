import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { whatFormatDate } from '../utils/libs/date.lib';

type DateFormat = 'yyyy-mm-dd' | 'dd/mm/yyyy';

@ValidatorConstraint({ name: 'isDateFormat', async: false })
class DateFormatValidator implements ValidatorConstraintInterface {
  private _args: ValidationArguments;

  validate(value: string, args: ValidationArguments) {
    this._args = args;
    return args.constraints[0] === whatFormatDate(value);
  }

  defaultMessage() {
    return `${this._args.property} is invalid use the format ${this._args.constraints[0]}`;
  }
}

export function IsDateFormat(format: DateFormat) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isDateFormat',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [format],
      validator: DateFormatValidator,
    });
  };
}
