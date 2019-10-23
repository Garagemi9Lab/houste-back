export default {
    'swagger': '2.0',
    'info': {
        'description': 'API para Chatbot',
        'version': '1.0.0',
        'title': 'Houste Chatbot',
        'contact': {
            'email': 'rabah.zeineddine@hotmail.com'
        },
        'license': {
            'name': 'Apache 2.0',
            'url': 'http: //www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    'tags': [
        {
            'name': 'message',
            'description': ''
        }
    ],
    'paths': {
        '/message/{place}': {
            'post': {
                'tags': [
                    'message'
                ],
                'summary': 'Enviar mensagem para chatbot',
                'operationId': 'sendMessage',
                'description': 'Passando os parametros certos, consegue interagir com o chatbot',
                'produces': [
                    'application/json'
                ],
                'parameters': [
                    {
                        'in': 'path',
                        'name': 'place',
                        'description': 'O local que gostaria de fazer as perguntas',
                        'required': true,
                        'type': 'string'
                    },
                    {
                        'in': 'body',
                        'name': 'params',
                        'description': 'A mensagem a ser enviada e o contexto anterior',
                        'schema': {
                            '$ref': '#/definitions/params'
                        }
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'Mensagem enviada e resposta recebida com sucesso',
                        'schema': {
                            '$ref': '#/definitions/response'
                        }
                    },
                    '400': {
                        'description': 'bad input parameter'
                    }
                }
            }
        }
    },
    'definitions': {
        'params': {
            'type': 'object',
            'required': [
                'message',
                'context'
            ],
            'properties': {
                'message': {
                    '$ref': '#/definitions/message'
                },
                'context': {
                    '$ref': '#/definitions/context'
                }
            }
        },
        'message': {
            'type': 'object',
            'required': [
                'type',
                'date',
                'user',
                'value'
            ],
            'properties': {
                'type': {
                    'type': 'string'
                },
                'date': {
                    'type': 'date'
                },
                'user': {
                    'type': 'string'
                },
                'application': {
                    'type': 'string'
                },
                'value': {
                    'type': 'string'
                }
            }
        },
        'context': {
            'type': 'object'
        },
        'response': {
            'type': 'object',
            'properties': {
                'messages': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/message'
                    }
                },
                'context': {
                    '$ref': '#/definitions/context'
                }
            }
        }
    },
    'host': 'virtserver.swaggerhub.com',
    'basePath': '/RabahZein/Houste/1.0.0',
    'schemes': [
        'https'
    ]
}