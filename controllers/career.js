const Career = require('../models/career');

// post career quiz  data json to database
exports.postCareer = (req, res, next) => {
  const career = new Career(req.body);
  //   add also the user id to the career quiz data
  career.user = req.profile._id;

  //   if user has already taken the career quiz, update the data
  if (career.user) {
    Career.findOneAndUpdate(
      { user: career.user },
      career,
      { new: true },
      (err, career) => {
        if (err) {
          return res.status(400).json({
            err: 'Not able to update career quiz data in DB',
          });
        }
        res.json(career);
      }
    );
  }

  //   if user has not taken the career quiz, save the data
  career.save((err, career) => {
    if (err) {
      return res.status(400).json({
        err: 'Not able to save career quiz data in DB',
      });
    }
    res.json(career);
  });
};
