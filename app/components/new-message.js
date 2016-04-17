import Ember from 'ember';

const {get,set} = Ember;


export default Ember.Component.extend({
  hasFacebook: false,
  hasTwitter: false,
  sharings: [
    { id: "sharing", title: 'Share contact info'},
    { id: 'notsharing', title: 'Do Not Share'}
  ],

  init() {
    this._super();
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
});
