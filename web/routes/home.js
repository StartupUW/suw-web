// Home Page

module.exports = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
