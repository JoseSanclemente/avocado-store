import DB from '../../../database/db'

const allAvocados = async (request, response) => {
    const db = new DB();
    const allEntries = await db.getAll();

    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json')
    response.end(JSON.stringify({ data: allEntries }))
}

export default allAvocados;