const validator = require("express-validator");
var Genre = require('../models/genre');

//GET genres
exports.genre_list = function (req,res) {
  res.send('NOT IMPLEMENTED: all genres list');
};

exports.genre_detail = function (req,res) {
    res.render('genre_form', {title: 'Create Genre'});
};

// Display Genre create form on GET.
exports.genre_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre create GET');
};

// Handle Genre create on POST.
exports.genre_create_post = [
    // Validate that the name field is not empty.
    validator.body('name','Genre name required').isLength({ min: 1 }).trim(),

    // Sanitize (escape) the name field.
    validator.sanitizeBody('name').escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract validation errors from request
        const errors = validator.validationResult(req);

        //Create a genre object with escaped and trimmed data
        var genre = new Genre(
            { name: req.body.name }
        );

        if (!errors.isEmpty()) {
            res.render('genre-form', {title: 'Create genre', genre: genre, errors: errors.array()});
            return;
        }
        else {
            // Data form is valid
            //Check if genre with the same name already exists
            Genre.findOne({'name': req.body.name})
            .exec( function(err, found_genre) {
                if (err) {return next(err);}

                if (found_genre) {
                    //Genre exists. Redirect to its detail page
                    res.redirect(found_genre.url):
                }
                else {
                    genre.save(function(err) {
                        if (err) {return next(err); }
                        //Genre saved. Redirect to genre detail page
                        res.redirect(genre.url);
                    });
                }

            });
        }
    }
];

// Display Genre delete form on GET.
exports.genre_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST.
exports.genre_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET.
exports.genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST.
exports.genre_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};