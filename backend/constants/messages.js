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
  GRADE: 'Grade',
  USER: 'User',
  REGISTER_START: 'Start',
  COURSE: 'Course',
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

export const REGISTER_MODEL = {
  FOUND: 'Register not found',
  GETTING: 'Error getting register',
  CREATING: 'Error creating register',
};

export const TOPIC_MODEL = {
  FOUND: 'Topics not found',
  GETTING: 'Error getting topics',
};

export const SUBTOPIC_MODEL = {
  FOUND: 'Sub topics not found',
  GETTING: 'Error getting sub topics',
};

export const getMessagesType = (type, field) => {
  return {
    REQUIRED: `${field} is required`,
    INVALID: `Invalid ${field}`,
    TYPE: `${field} must be ${type}`,
  };
};
