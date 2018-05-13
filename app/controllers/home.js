var numeral = require('numeral');
var dateFormat = require('dateformat');

exports.loggedIn = function(req, res, next)
{
	console.log("in root")
		res.redirect('/login');
}

exports.home = function(req, res) {
	
	
	res.render('404.ejs');
	 
}


exports.signup = function(req, res) {

	if (req.session.user) {

		res.redirect('/home');

	} else {

		res.render('signup', {
			error : req.flash("error"),
			success: req.flash("success"),
			session:req.session
		});
	}

}


exports.login = function(req, res) {


	
	if (req.session.user) {

		res.redirect('/home');

	} else {

		res.render('login', {
			error : req.flash("error"),
			success: req.flash("success"),
			session:req.session
		});

	}
	
}


    
