import Ember from 'ember';

const { get,set } = Ember;

export default Ember.Component.extend({
  hasFacebook: false,
  hasTwitter: false,
  isMe: true,
  // init(){
  //   this._super();
  //     var provider = get(this,'session.provider');
  //     var sessionID = get(this,'session.uid');
  //     var uid = get(this,'bidder.uid');
  //     console.log(sessionID);
  //     console.log(uid);
  //
  // },
  sortBy: ['date:desc'],
  sortedBids: Ember.computed.sort('bidder.bids', 'sortBy'),
  actions: {
    updateProfile(bidder, params) {
      this.sendAction('updateProfile', bidder, params);
    },
    postBid(params) {
      this.sendAction('postBid',params);
    }
  }
});
