import z from 'zod';
import { REGEX } from '../helpers/regular_expressions';
import { getMessagesType, TYPES, FIELDS } from '../constants/MESSAGES';

const NAME = getMessagesType(TYPES.STRING, FIELDS.NAME);
const EMAIL = getMessagesType(TYPES.STRING, FIELDS.MAIL);
const PASS = getMessagesType(TYPES.STRING, FIELDS.PASS);

const userSchema = z.object({
  full_name: z
    .string({
      required_error: NAME.REQUIRED,
      invalid_type_error: NAME.TYPE,
    })
    .regex(REGEX.USER.NAME, {
      message: NAME.INVALID,
    }),
  email: z
    .string({
      required_error: EMAIL.REQUIRED,
      invalid_type_error: EMAIL.TYPE,
    })
    .email({ message: NAME.INVALID }),
  pass: z
    .string({
      required_error: PASS.REQUIRED,
      invalid_type_error: PASS.TYPE,
    })
    .regex(REGEX.USER.PASS, { message: PASS.INVALID }),
});
