import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  senderName: DS.attr(),
  senderHandle: DS.attr(),
  senderUID: DS.attr(),
  senderAvatar: DS.attr(),
  posted: DS.attr(),
  bid: DS.belongsTo('bid', { async: true })
});
