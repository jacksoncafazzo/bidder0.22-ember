import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  phone: DS.attr(),
  email: DS.attr(),
  bids: DS.hasMany('bids', { async: true })
});
