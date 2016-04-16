import Ember from 'ember';

const { get,set } = Ember;

export default Ember.Component.extend({
  hasFacebook: false,
  hasTwitter: false,
  isMe: false,
  init(){
    this._super();
    get(this,'session').fetch().catch(session => {
      var provider = session.provider;
      var uid = get(this,'bidder.uid');
      console.log(uid);
      if (session.uid = uid) {
        set(this,'isMe', true);
      }
      else {
        console.log('not user');
        set(this,'isMe, false');
      }
      if (provider === "twitter") {
        set(this,'hasTwitter', true);
      }
      if (provider === "facebook") {
        set(this,'hasFacebook', true);
      }
    });
  },
  sortBy: ['date:desc'],
  sortedBids: Ember.computed.sort('bidder.bids', 'sortBy'),

});
