import { Router } from 'express'
import MessagesController from '../../controllers/MessagesController'

const initRouter = () => {
    let router = Router()

    router.route('/auth/login')
        .post(login)


    router.route('/message/:place')
        .post(message)

    return router
}


const login = async (req, res) => {
    // res.status(500).json({ error: true, detail: 'Internal server error test' })
    res.status(200).json({
        username: 'RabahZein',
        birthday: '31/05/1995',
        firstname: 'Rabah',
        lastname: 'Zeineddine'
    })
}

const message = async (req, res) => {
    const params = req.body
    const place = req.params.place
    if (!params.context) params.context = {}
    if (!params.context.LOCAL) params.context.LOCAL = place.replace(new RegExp(/_/g), ' ')
    // if (!params.context.skills['main skill']) params.context.skills['main skill'] = {}
    // if (!params.context.skills['main skill'].user_defined) params.context.skills['main skill'].user_defined = {}
    // if (!params.context.skills['main skill'].user_defined.LOCAL) params.context.skills['main skill'].user_defined.LOCAL = place
    let messageController = new MessagesController()
    try {
        let response = await messageController.send(params)
        res.status(200).json(response)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
}


export default initRouter()