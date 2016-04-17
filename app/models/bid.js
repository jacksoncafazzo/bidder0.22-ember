import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr(),
  date: DS.attr('date', {defaultValue() {return new Date(); } }),
  category: DS.attr(),
  title: DS.attr(),
  location: DS.attr(),
  payment: DS.attr(),
  providing: DS.attr(),
  description: DS.attr(),
  jobStart: DS.attr(),
  startTime: DS.attr(),
  endTime: DS.attr(),
  jobEnd: DS.attr(),
  active: DS.attr('boolean', {defaultValue() {return true;} }),
  latitude: DS.attr(),
  longitude: DS.attr(),
  marker: DS.belongsTo('marker', { async: true }),
  bidder: DS.belongsTo('bidder', { async: true }),
  messages: DS.hasMany('message', {async: true })
  // user: DS.belongsTo('user', { async: true })
  // jobbers: DS.hasMany('jobbers', { async: true })
});
