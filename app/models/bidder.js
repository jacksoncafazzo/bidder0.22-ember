import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  phone: DS.attr(),
  uid: DS.attr(),
  hood: DS.attr(),
  profileImgURL: DS.attr(),
  joined: DS.attr(),
  user: DS.belongsTo('user', { async: true }),
  bids: DS.hasMany('bids', { async: true })
});
