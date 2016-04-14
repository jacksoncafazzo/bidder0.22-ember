import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  username: DS.attr('string'),
  avatar: DS.attr('string'),
  bidder: DS.belongsTo('bidder', { async: true }),
  email: DS.attr('string'),
  
  // bids: DS.hasMany('bids', { async: true })
});
