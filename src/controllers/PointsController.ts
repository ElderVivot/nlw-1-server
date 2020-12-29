import { Request, Response } from 'express'
import knex from '../database/connection'

class PointsController {
    async create(request: Request, response: Response) {
        const {
            name, email, whatsapp, latitude, longitude, city, uf, items
        } = request.body
    
        // o transaction force all that calls him has sucess. In all example is insertPoint and insertPointItems
        const transaction = await knex.transaction()

        const point = { image: 'image-fake', name, email, whatsapp, latitude, longitude, city, uf }
    
        // the knex insert returns data created, so I get this information to use in point_items (many-to-many)
        // For that returns data I need to pass in second argumento a information '*'
        const insertedIds = await transaction('points').insert( point , '*')
    
        // get only id
        const point_id = insertedIds[0].id
    
        // I mount data of my point_items with information item_id (that has in request.body) and point_id
        // that returned with knex.insert
        const pointItems = items.map( (item_id:number) => {
            return {
                item_id,
                point_id: point_id
            }
        })
    
        // populate relationship many-to-many
        await transaction('point_items').insert(pointItems)

        // to do commit
        await transaction.commit()
    
        return response.json({point_id, ...point})
    }
}

export default PointsController