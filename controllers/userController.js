const boom = require('boom');
const passport = require('passport');

const User = require('@/models/userModel');

exports.health = (req, res) => {
  res.json({
    status: 'success',
    message: 'api user available',
  });
};

exports.new = async (req, res) => {
  const {
    body: param,
  } = req;

  try {
    User.register(
      new User({
        username: param.username,
        name: param.name,
        email: param.email,
        description: param.description,
        picture: param.picture,
      }), param.password, (err, user) => {
        if (err) {
          res.status(401).json({ msg: err });
        }
        passport.authenticate('local')(req, res, () => {
          res.json({ user });
        });
      },
    );
  } catch (e) {
    res.status(500).json(boom.boomify(e));
  }
};

exports.view = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findById(id);
    res.json({
      status: 'success',
      data,
    });
  } catch (e) {
    res.json(boom.boomify(e));
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const { ...updateData } = update;
    const data = await User.findByIdAndUpdate(id, updateData, { new: true });
    res.json({
      status: 'success',
      data,
    });
  } catch (e) {
    res.json(boom.boomify(e));
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findByIdAndRemove(id);
    res.json({
      status: 'success',
      data,
    });
  } catch (e) {
    res.json(boom.boomify(e));
  }
};
