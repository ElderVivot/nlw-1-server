import path from 'path'
import 'dotenv/config'

module.exports = {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'docker',
        database: process.env.DB_DATABASE || 'nlw_1'
    },
    migrations: {
        directory: path.resolve(__dirname, 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'database', 'seeds')
    }
}