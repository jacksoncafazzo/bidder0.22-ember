import Ember from 'ember';

const { get, set } = Ember;

export default Ember.Route.extend({
  beforeModel(){
    get(this,'session').fetch().catch(session => {
      var provider = session.provider;
      if (provider === "twitter") {
        set(this,'hasTwitter', true);
      }
      if (provider === "facebook") {
        set(this,'hasFacebook', true);
      }
    });
  },
  hasFacebook: false,
  hasTwitter: false,
  model() {
    var uid = this.get('session.uid');

    // console.log(this.get('bidders'));
    return Ember.RSVP.hash({
      bidders: this.store.query('bidder', {
      orderBy: 'uid',
      equalTo: uid
      }),
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
