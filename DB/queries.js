const connection = require('./connection');

const query = (query, valores = '') => {
    return new Promise((resolve, reject) => {
        connection.query(query, valores, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    })
};

module.exports = query;