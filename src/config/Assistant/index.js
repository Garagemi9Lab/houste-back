import AssistantV1 from 'ibm-watson/assistant/v1'
import { IamAuthenticator } from 'ibm-watson/auth'

import { env } from '../../config'

export default new AssistantV1({
    version: env.assistant.version,
    authenticator: new IamAuthenticator({
        apikey: env.assistant.iam_apikey,
    }),
    url: env.assistant.url
})