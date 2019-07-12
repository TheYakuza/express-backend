const boom = require('boom');

const Change = require('@/models/changeModel');

exports.health = (req, res) => {
  res.json({
    status: 'success',
    message: 'api change available',
  });
};

exports.index = async (req, res) => {
   try {
    const data = Change.find();
    res.json({
      status: 'success',
      data,
    });
   } catch (e) {
    res.json(boom.boomify(e));
   }
};

exports.new = async (req, res) => {
  try {
    const change = new Change(req.body);
    const data = change.save();
    res.json({
      status: 'success',
      data,
    });
  } catch (e) {
    res.json(boom.boomify(e));
  }
};

exports.view = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Change.findById(id);
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
    const data = await Change.findByIdAndUpdate(id, updateData, { new: true });
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
    const data = await Change.findByIdAndRemove(id);
    res.json({
      status: 'success',
      data,
    });
  } catch (e) {
    res.json(boom.boomify(e));
  }
};
