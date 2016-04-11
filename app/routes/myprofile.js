import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('myprofile', params.myprofile_id);
  },
  actions: {

  }
});
