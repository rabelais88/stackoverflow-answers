import { required, email } from 'vee-validate/dist/rules';

const rules = {
  required: { ...required },
  email: { ...email },
};

export default rules;
