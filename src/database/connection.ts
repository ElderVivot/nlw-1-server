import knex from 'knex'
import 'dotenv/config'

const connection = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'postgres',
        database: process.env.DB_DATABASE || 'db_example'
    },
    useNullAsDefault: true
})

export default connection