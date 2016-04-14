import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  lat: DS.attr(),
  lng: DS.attr(),
  draggable: DS.attr(),
  cursor: DS.attr(),
  bid: DS.belongsTo('bid', { async: true })
});
