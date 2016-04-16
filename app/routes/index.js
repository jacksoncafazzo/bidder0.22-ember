import Ember from 'ember';

const { get, set } = Ember;

export default Ember.Route.extend({
  hasFacebook: false,
  hasTwitter: false,
  currentBidder: {},
  beforeModel() {
    let provider = get(this,'session.provider');
    if (provider === "twitter") {
      set(this,'hasTwitter', true);
      console.log('twit twit');
    }
    if (provider === "facebook") {
      set(this,'hasFacebook', true);
      console.log('fb');
    }

  },
  model() {
    let uid = get(this,'session.uid');
    return this.store.query('bidder', {
      orderBy: 'uid',
      equalTo: uid
    });
  },

  actions: {

  }
});
