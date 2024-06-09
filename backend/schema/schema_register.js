import z from 'zod';
import { getMessagesType, FIELDS, TYPES } from '../constants/messages';

const USER = getMessagesType(TYPES.STRING, FIELDS.USER);
const REGISTER_START = getMessagesType(TYPES.STRING, FIELDS.REGISTER_START);
const COURSE = getMessagesType(TYPES.STRING, FIELDS.COURSE);

const registerSchema = z.object({
  user: z
    .string({
      required_error: USER.REQUIRED,
      invalid_type_error: USER.INVALID,
    })
    .uuid({ message: USER.INVALID }),
  register_start: z.string({
    required_error: REGISTER_START.REQUIRED,
    invalid_type_error: REGISTER_START.TYPE,
  }),
  courser: z
    .string({
      required_error: COURSE.REQUIRED,
      invalid_type_error: COURSE.TYPE,
    })
    .uuid({ message: COURSE.INVALID }),
});
export const validateRegister = (input) => {
  return registerSchema.safeParse(input);
};
