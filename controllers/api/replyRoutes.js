const router = require('express').Router();
const { Reply } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async(req, res) => {
  try {
    const replyDate = await Reply.findAll();
    res.status(200).json(replyDate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newReply = await Reply.create({
      ...req.body,
      user_id: req.session.user_id,
      project_id: req.body.project_id,
    });

    res.status(200).json(newReply);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const newReply = await Reply.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!newReply) {
      res.status(404).json({ message: 'No reply found with this id!' });
      return;
    }

    res.status(200).json(newReply);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
