const post = require('../moduls/Post.modul')


module.exports.postController = {
    getPost : async (req , res) => {
        try {
            let data = await post.findById(req.params.id)
            res.json(data)
        } catch (error) {
            res.json((error))
        }
    } , 
    getPosts: async function(req, res) {
        try {
            let data = await Post.find(req.query.user ? { user: req.query.user } : null).populate('user')
            res.json(data)
        } catch (err) {
            res.json({"error": "Не удалось получить записи"})
        }
    },
    postPost: async function(req, res) {
        try {
            await Post.create({
                text: req.body.text,
                user: req.body.user,
            })
            res.json('Запись создана')
        } catch (err) {
            res.json({"error": "Ошибка при добавлении"})
        }
    },
    deletePost: async function(req, res) {
        try {
            await Post.findByIdAndDelete(req.params.id)
            res.json('запись добавлена')
        } catch (err) {
            res.json({"error": "Ошибка при удалении записи"})
        }
    },
    patchPost: async function(req, res) {
        try {
            await Post.findByIdAndUpdate(req.params.id, {
                text: req.body.text,
                user: req.body.user,
            })
            res.json('запись изменена')
        } catch (err) {
            res.json({"error": "Ошибка при изменении записи"})
        }
    }
}