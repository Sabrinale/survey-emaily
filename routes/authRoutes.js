const passport = require('passport');

module.exports = (app) => {
app.get(
    '/auth/google', 
    passport.authenticate('google', {
    scope: ['profile', 'email']
})
);

app.get('/auth/google/callback',
 passport.authenticate('google'),
 (req, gi res) => {
     res.redirect('/surveys');
 }
);
app.get('/api/logout', (req, res) => {
// logout() attach by passport, when logout call 
// it takes cookies kill id cookie
req.logout();
res.send(req.user);
});
app.get('/api/current_user', (req, res) => {
    res.send(req.user);
});
};
