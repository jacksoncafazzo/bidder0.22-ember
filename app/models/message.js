import DS from 'ember-data';

export default DS.Model.extend({
  bidResponse: DS.attr(),
  senderName: DS.attr(),
  senderUID: DS.attr(),
  senderContact: DS.attr(),
  senderAvatar: DS.attr(),
  bid: DS.belongsTo('bid', { async: true })
});
