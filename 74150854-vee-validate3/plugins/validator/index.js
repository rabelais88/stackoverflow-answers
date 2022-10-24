import Vue from 'vue';
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  configure,
} from 'vee-validate';
import rules from './rules';

export default ({ app }) => {
  Object.entries(rules).forEach(([ruleName, rule]) => {
    extend(ruleName, rule);
  });
  // app.i18n.t might not be available at certain moment. make the function work lazy
  configure({
    defaultMessage: (field, values) => {
      return app.i18n.t(`validation.${values._rule_}`, values);
    },
  });
  Vue.component('ValidationProvider', ValidationProvider);
  Vue.component('ValidationObserver', ValidationObserver);
};
