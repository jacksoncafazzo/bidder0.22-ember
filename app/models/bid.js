import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  payment: DS.attr('number'),
  description: DS.attr(),
  jobStart: DS.attr(),
  jobEnd: DS.attr(),
  marker: DS.attr(),
  bidder: DS.belongsTo('bidder', { async: true })
  // jobbers: DS.hasMany('jobbers', { async: true })
});
