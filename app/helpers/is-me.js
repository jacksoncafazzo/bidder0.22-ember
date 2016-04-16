import Ember from 'ember';

const {get} = Ember;

export function isMe(bidderId/*, hash*/) {
  var uid = get(this,'session.uid');
  if (uid === bidderId) {
    return true;
  }
  else {
    return false;
  }
}

export default Ember.Helper.helper(isMe);
