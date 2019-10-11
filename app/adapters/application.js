import DS from 'ember-data';
import ENV from "ember-github-adapter/config/environment";
import { computed } from '@ember/object';

const token = ENV.GITHUB_TOKEN;
const user = ENV.GITHUB_USER;

export default DS.RESTAdapter.extend({
  headers: computed(function() {
    return {
      'Authorization': `token ${token}`,
      'User-Agent': user,
      'Accept': 'application/vnd.github.symmetra-preview+json'
    };
  }),
  host: 'https://api.github.com',
})
