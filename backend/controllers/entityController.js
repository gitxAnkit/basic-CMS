const pool = require("../db");

async function createEntity(req, res) {
    try {
        const { entityName, attributes } = req.body;
        const query = `CREATE TABLE ${entityName} (${attributes})`;
        const newEntity = await pool.query(query);
        res.status(201).json(newEntity.rows);

    } catch (error) {
        console.log(error.message);
    }
}

async function getAllEntity(req, res) {
    try {
        const query = `SELECT table_name FROM information_schema.tables WHERE 
                        table_schema = 'public' AND 
                            table_type = 'BASE TABLE';`
        const allEntities = await pool.query(query);
        res.json(allEntities.rows);
    } catch (error) {
        console.log(error.message);
    }
}
async function deleteEntityByName(req, res) {
    try {
        const entityName = req.params.ename;
        const query = `DROP TABLE ${entityName}`;

        await pool.query(query);
        res.json(`${entityName} deleted successfully!`);

    } catch (error) {
        console.log(error.message);
    }
}
// not working---
async function getEntityByName(req, res) {
    try {
        const entityName = req.params.ename;
        const query = `SELECT ${entityName} FROM information_schema.tables WHERE 
                                                table_schema = 'public' AND
                                                 table_name LIKE '${entityName}'`;

        const entity = await pool.query(query);
        res.json(entity);

    } catch (error) {
        console.log(error.message);
    }
}
async function createEntityData(req, res) {
    try {
        const entityName = req.params.ename;
        const { values } = req.body;
        const query = `INSERT INTO ${entityName} VALUES(${values})`;
        await pool.query(query);

        res.json("Success!");
    } catch (error) {
        console.log(error.message);
    }
}
async function getEntityData(req, res) {
    try {
        const entityName = req.params.ename;
        const query = `SELECT * FROM ${entityName};`;
        const newRow = await pool.query(query);
        res.json(newRow.rows);
    } catch (error) {
        console.log(error.message);
    }
}
async function deleteEntityData(req, res) {
    try {
        const { ename, id } = req.params;
        const query = `DELETE FROM ${ename} WHERE id=${id};`;
        await pool.query(query);

        res.json("Deleted successfully!");
    } catch (error) {
        console.log(error.message);
    }
}
async function updateEntityData(req, res) {
    try {
        const { ename, id } = req.params;
        const { updateData } = req.body;
        const query = `UPDATE ${ename} SET ${updateData} WHERE id = ${id}`;
        console.log(query);
        await pool.query(query);

        res.json("Updated successfully!");
    } catch (error) {
        console.log(error.message);
    }
}
async function getEntityDataById(req, res) {
    try {
        const { ename, id } = req.params;
        const query = `SELECT * FROM ${ename} WHERE id=${id}`;
        const data = await pool.query(query);
        res.json(data.rows);
    }
    catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    createEntity,
    getAllEntity,
    deleteEntityByName,
    getEntityByName,
    createEntityData,
    getEntityData,
    deleteEntityData,
    updateEntityData,
    getEntityDataById
}