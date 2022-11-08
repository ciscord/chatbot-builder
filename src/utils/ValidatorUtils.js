import * as yup from 'yup';

class ValidatorUtils {

  static string(label) {
    return yup
      .string()
      .label(label)
      .strict(false)
      .trim();
  }

  static stringRequired(label) {
    return yup
      .string()
      .label(label)
      .strict(false)
      .trim()
      .required();
  }

  static arrayString(label) {
    return yup
      .array()
      .of(yup.string())
      .label(label);
  }

  static arrayStringRequired(label) {
    return yup
      .array()
      .of(yup.string())
      .label(label)
      .required();
  }
}

export default ValidatorUtils;
export { ValidatorUtils };
