import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date', {defaultValue() {return new Date(); } }),
  category: DS.attr(),
  title: DS.attr(),
  location: DS.attr(),
  payment: DS.attr('number'),
  providing: DS.attr('boolean'),
  description: DS.attr(),
  jobStart: DS.attr(),
  jobEnd: DS.attr(),
  active: DS.attr('boolean', {defaultValue() {return true;} }),
  latitude: DS.attr(),
  longitude: DS.attr(),
  marker: DS.belongsTo('marker', { async: true }),
  bidder: DS.belongsTo('bidder', { async: true }),
  // user: DS.belongsTo('user', { async: true })
  // jobbers: DS.hasMany('jobbers', { async: true })
});
