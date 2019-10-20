import DS from 'ember-data';
import ENV from "ember-github-adapter/config/environment";
import { computed } from '@ember/object';

const token = ENV.GH_TOKEN;
const user = ENV.GH_USER;

export default DS.RESTAdapter.extend({
  headers: computed(function() {
    return {
      'Authorization': `token ${token}`,
      'User-Agent': user
    };
  }),
  host: 'https://api.github.com',
})
