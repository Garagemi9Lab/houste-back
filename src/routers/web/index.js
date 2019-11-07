import { Router } from 'express'
import MessagesController from '../../controllers/MessagesController'

const initRouter = () => {
    let router = Router()

    router.route('/auth/login')
        .post(login)


    router.route('/message/:place')
        .post(message)

    router.route('/message')
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
    if (!params.context || params.message.firstMessage) params.context = {}
    if (!params.context.LOCAL && place) params.context.LOCAL = place.replace(new RegExp(/_/g), ' ')

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