const Comment = require('../moduls/Comment.modul')


module.exports.commentsController = {
    getComments: async function(req, res) {
        try {
            let data = await Comment.find(req.query.post ? { post: req.query.post } : {'': ''}).populate('post')
            res.json(data)
        } catch (err) {
            res.json({"error": "Не удалось получить записи"})
        }
    },
    postComment: async function(req, res) {
        try {
            await Comment.create({
                text: req.body.text,
                post: req.body.post,
                user: req.body.user,
            })
            res.json('Запись добавлена')
        } catch (err) {
            res.json({"error": "Ошибка при добавлении записи"})
        }
    },
    deleteComment: async function(req, res) {
        try {
            await Comment.findByIdAndDelete(req.params.id)
            res.json('запись удалена')
        } catch (err) {
            res.json({"error": "Ошибка при удалении записи"})
        }
    },
    patchComment: async function(req, res) {
        try {
            await Comment.findByIdAndUpdate(req.params.id, {
                text: req.body.text,
                post: req.body.post,
                user: req.body.user,
            })
            res.json('запись изменена')
        } catch (err) {
            res.json({"error": "Ошибка при изменении записи"})
        }
    }
}