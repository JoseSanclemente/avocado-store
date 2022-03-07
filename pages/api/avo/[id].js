import DB from '../../../database/db'

const getAvocado = async (request, response) => {
    const db = new DB();

    const item = await db.getById(request.query.id);

    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');
    response.end(JSON.stringify(item));
}

export default getAvocado;