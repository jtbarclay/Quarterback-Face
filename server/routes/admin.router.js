const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const query = `SELECT * from "quarterbacks";`;

    pool.query(query)
        .then((response) => {
            console.log('admin GET response', response);
            res.send(response.rows);
        })
        .catch((error) => {
            console.log('admin GET error', error);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const query = `
        INSERT INTO "quarterbacks" ("name", "score") 
        VALUES ($1, $2);
    `;

    console.log('in admin router req.body: ', req.body);


    pool.query(query, [req.body.name, req.body.score])
        .then((response) => {
            console.log('admin POST response', response);
        })
        .catch((error) => {
            console.log('admin POST error', error);
        })
});

router.delete('/:id', (req, res) => {
    const query = `
        DELETE FROM "quarterbacks"
        WHERE "id" = $1;
    `;

    pool.query(query, [req.params.id])
        .then((response) => {
            console.log('admin DELETE response', response);
        })
        .catch((error) => {
            console.log('admin DELETE error', error);
        })
})

module.exports = router;