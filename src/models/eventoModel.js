const connection = require('../../db');

exports.all = async() => {
    const query = `
        SELECT id, nombre, cupo
        FROM eventos
    `;
    try{
        [results] = await connection.query(query);
        return results;
    }catch(error){
        throw error;
    }
}

exports.find = async(ID) => {
    const query = `
        SELECT id, nombre, cupo
        FROM eventos
        WHERE id = ?
    `;
    try{
        [results] = await connection.query(query, [ID]);
        return (results.length == 1) ? results[0] : null;
    }catch(error){
        throw error;
    }
}