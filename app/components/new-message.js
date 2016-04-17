import Ember from 'ember';

const {get,set} = Ember;


export default Ember.Component.extend({
  hasFacebook: false,
  hasTwitter: false,
  sharings: [
    { id: true, title: 'Share contact info'},
    { id: false, title: 'Do Not Share'}
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
  actions: {
    postMessage() {
      var sharing = this.get('sharing');
      var params = {
        content: this.get('content'),
        bid: this.get('bid'),
        senderName: "not shared",
        senderUID: this.get('session.uid'),
        senderAvatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/AWS_Simple_Icons_Non-Service_Specific_User.svg/120px-AWS_Simple_Icons_Non-Service_Specific_User.svg.png",
        posted: new Date(),
        senderHandle: "http://www.google.com"
      };
      if (sharing) {
        params['senderName']= this.get('session.currentUser.displayName');
        params['senderAvatar']= this.get('session.currentUser.profileImageURL');
        if (this.get('hasTwitter')) {
          params['senderHandle']= this.get('session.username');
        }
        if (this.get('hasFacebook')) {
          params['senderHandle']= this.get('session.currentUser.id');
        }
      }
      this.set('content', "");
      this.sendAction('postMessage', params);
    }
  }
});
