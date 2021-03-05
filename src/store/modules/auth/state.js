import { getToken } from '../../../utils/auth';

export const state = {
  token: getToken(),
  name: '',
  role: null,
  expires_in: 600000,
};
