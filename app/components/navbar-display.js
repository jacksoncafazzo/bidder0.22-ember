import Ember from 'ember';
const {get,set} = Ember;

export default Ember.Component.extend({
  hasFacebook: false,
  hasTwitter: false,
  init() {
    this._super();
    // var uid = this.get('session.uid');

    var provider = get(this,'session.provider');
    if (provider === "twitter") {
      set(this,'hasTwitter', true);
      // console.log("hoo boy you got twitter", get(this,'hasTwitter'));
    }
    if (provider === "facebook") {
      set(this,'hasFacebook', true);
      console.log("boy howdy u has facebook");
    }
  },
  model() {
    return {message: "hey bud"};
  },
  actions: {
    loginTwitter() {
      this.sendAction('loginTwitter');
    },
    loginFacebook() {
      this.sendAction('loginFacebook');
    },
    logout() {
      this.sendAction('logout');
    },
    accessDenied() {
      this.sendAction('accessDenied');
    }
  }
});
