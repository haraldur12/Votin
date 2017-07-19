import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  sendVerificationLink() {
    const userId = Meteor.userId();
    return Accounts.sendVerificationEmail(userId);
  }
});

export const validateNewUser = (user) => {
  const email = user.emails[0].address;
  new SimpleSchema({
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    }
  }).validate({ email });

  return true;
};

if (Meteor.isServer) {
  Accounts.validateNewUser(validateNewUser);
}
