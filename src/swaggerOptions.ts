const PORT = process.env.PORT;
export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'TheDB testAPI',
            version: '1.0.0',
            description: 'a simple api with swagger docs'
        },
    },
    apis: ['./src/routes/*.ts']
}
