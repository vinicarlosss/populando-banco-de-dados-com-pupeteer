const mysql = require("mysql2/promise");

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    const connection = await mysql.createConnection("mysql://root:1998ronca@localhost:3306/formula_magica");
    global.connection = connection;
    return connection
}

async function insertEmpresa(empresa,ebit,valor,divida){
    const sql = 'INSERT INTO empresa (ticker,nome_empresa,ebit,valor_mercado,divida_liquida) VALUES(?,?,?,?,?);'
    const values = [empresa[i][0], empresa[i][1], ebit, (resultado[2].value/1000000).toFixed(2), (resultado[9].value/1000000).toFixed(2)];
    await conn.query(sql,values);
    const sql2 = 'INSERT INTO ranking (ticker,nome_empresa,earning_yeld) VALUES(?,?,?);'
    const values2 = [empresa[i][0],empresa[i][1],ey];
    await conn.query(sql2,values2);
};

module.exports = {insertEmpresa}