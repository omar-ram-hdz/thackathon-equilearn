import { validateUser, validatePartialUser } from '../schema/schema_user.js';
import { getMessagesType, TYPES, FIELDS } from '../constants/messages.js';
import z from 'zod';

const uuid = z.string().uuid();

export class UserController {
  constructor(userModel) {
    this.userModel = userModel;
    this.RESPONSES_UUID = getMessagesType(TYPES.STRING, FIELDS.UUID);
  }
  create = async (req, res) => {
    const result = validateUser(req.body);
    if (!result.success)
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    const newUser = await this.userModel.create(result.data);

    return res.status(201).json({ id: newUser });
  };

  get = async (req, res) => {
    const { email, pass } = req.params;
    const result = validatePartialUser({ email, pass });
    if (!result.success)
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    const user = await this.userModel.get(result.data);
    console.log(user);
    return res.status(201).json({ user });
  };

  getById = async (req, res) => {
    const { id } = req.params;
    if (!uuid.parse(id))
      return res.status(400).json({ error: this.RESPONSES_UUID.INVALID });
    const user = await this.userModel.getById(id);
    console.log(user);
    return res.status(201).json({ user });
  };
}
