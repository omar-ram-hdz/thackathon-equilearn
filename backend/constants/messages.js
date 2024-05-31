export const MESSAGE_TYPE = Object.freeze({
  REQUIRED: Symbol(),
  TYPE: Symbol(),
  INVALID: Symbol(),
});

export const TYPES = Object.freeze({
  STRING: 'String',
  NUMBER: 'Number',
});

export const FIELDS = Object.freeze({
  NAME: 'Full name',
  MAIL: 'Email',
  PASS: 'Password',
  UUID: 'UUID',
});

export const USER_MODEL = {
  FOUND: 'User not found',
  GETTING: 'Error getting user',
  CREATING: 'Error creating user',
};

export const COURSE_MODEL = {
  FOUND: 'Course not found',
  GETTING: 'Error getting course',
  CREATING: 'Error creating course',
};

export const getMessagesType = (type, field) => {
  return {
    REQUIRED: `${field} is required`,
    INVALID: `Invalid ${field}`,
    TYPE: `${field} must be ${type}`,
  };
};
