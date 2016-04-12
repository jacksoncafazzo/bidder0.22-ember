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
  active: DS.attr('boolean'),
  // marker: DS.attr(),
  bidder: DS.belongsTo('bidder', { async: true })
  // jobbers: DS.hasMany('jobbers', { async: true })
});
