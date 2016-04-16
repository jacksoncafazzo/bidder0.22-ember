import Ember from 'ember';

const { get, set } = Ember;

export default Ember.Route.extend({
  beforeModel(){
    get(this,'session').fetch().catch(session => {
      var provider = get(this,'session.provider');
      console.log(session.provider);
      if (provider === "twitter") {
        set(this,'hasTwitter', true);
        console.log(get(this,'hasTwitter'));
      }
      if (provider === "facebook") {
        set(this,'hasFacebook', true);
        console.log("boy howdy u has facebook");
      }
    });
    return get(this,'session').fetch().catch(function(){});
  },
  hasFacebook: false,
  hasTwitter: false,
  model() {
    var uid = this.get('session.uid');
    return Ember.RSVP.hash({
      bidders: this.store.query('bidder', {
        orderBy: 'uid',
        equalTo: uid
      }),
      users: this.store.query('user', {
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
