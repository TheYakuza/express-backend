// const boom = require('boom');
//
// const Base = require('@/models/baseModel');

exports.health = (req, res) => {
  res.status(200).send({
    status: 'success',
    message: 'api base available',
  });
};

// exports.index = async (req, res) => {
//   try {
//     const data = Base.find();
//     res.json({
//       status: 'success',
//       data,
//     });
//   } catch (e) {
//     res.json(boom.boomify(e));
//   }
// };
//
// exports.add = async (req, res) => {
//   try {
//     const base = new Base(req.body);
//     const data = base.save();
//     res.json({
//       status: 'success',
//       data,
//     });
//   } catch (e) {
//     res.json(boom.boomify(e));
//   }
// };
//
// exports.view = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = await Base.findById(id);
//     res.json({
//       status: 'success',
//       data,
//     });
//   } catch (e) {
//     res.json(boom.boomify(e));
//   }
// };
//
// exports.update = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const update = req.body;
//     const { ...updateData } = update;
//     const data = await Base.findByIdAndUpdate(id, updateData, { new: true });
//     res.json({
//       status: 'success',
//       data,
//     });
//   } catch (e) {
//     res.json(boom.boomify(e));
//   }
// };
//
// exports.delete = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = await Base.findByIdAndRemove(id);
//     res.json({
//       status: 'success',
//       data,
//     });
//   } catch (e) {
//     res.json(boom.boomify(e));
//   }
// };
