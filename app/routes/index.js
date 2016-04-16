import Ember from 'ember';

const { get, set, store } = Ember;

export default Ember.Route.extend({
  beforeModel(){
      var provider = get(this,'provider');
      var uid = get(this,'session.uid');
      console.log(uid);
      var bidder = this.store.query('bidder', {
      orderBy: 'uid',
      equalTo: uid
      });
      this.set('bidder', bidder);
      if (provider === "twitter") {
        set(this,'hasTwitter', true);
      }
      if (provider === "facebook") {
        set(this,'hasFacebook', true);
      }
      console.log(get(this,'bidder'));
  },
  bidder: {},
  hasFacebook: false,
  hasTwitter: false,
  model() {
    var uid = this.get('session.uid');

    // console.log(this.get('bidders'));
    return Ember.RSVP.hash({
      bidder: this.get('bidder'),
      user: this.store.query('user', {
        orderBy: 'uid',
        equalTo: uid
      })
    });
  },
  getBidder(uid) {
    var bidder = this.store.query('bidder', {
      orderBy: 'uid',
      equalTo: uid
    });
    return bidder;
  },
  actions: {

  }
});
