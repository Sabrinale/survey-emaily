const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongose = require('mongoose');

const keys = require('../config/keys');

//User object here is model class, 
const User = mongose.model('users');
passport.serializeUser((user, done) => {
    done(null, user.id);
});/*user.id is id in mlab in user doc genreated by mongo automaticlly reference shortcut*/
passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback', 
    proxy : true
}, async (accessToken, refreshToken, profile, done) => {
    // console.log('access token: ', accessToken);
    // console.log('refreshToken: ', refreshToken);
     //id from profile object
    //without.save model instance object stays only in express api not in mongo
    // moi lan refresh thi lai luu id nen ktra ko can dk user moi 
    // tat ca ca dong code chung ta khoi tao asyn action
    //query return a promise
    const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
            return done(null, existingUser);
        } 
        const user = await new User({ googleId: profile.id }).save();
             done(null, user);
}
));
