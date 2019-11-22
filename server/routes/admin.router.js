const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const query = `
        SELECT * from "quarterbacks"
        ORDER BY "id";
    `;

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
router.post('/', rejectUnauthenticated, (req, res) => {
    const query = `
        INSERT INTO "quarterbacks" ("name", "score") 
        VALUES ($1, $2);
    `;

    pool.query(query, [req.body.name, req.body.score])
        .then((response) => {
            console.log('admin POST response', response);
        })
        .catch((error) => {
            console.log('admin POST error', error);
        })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
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

router.put('/', rejectUnauthenticated, (req, res) => {
    const query = `
        UPDATE "quarterbacks" SET "name"=$1, "score"=$2
        WHERE "id"=$3;
    `;

    console.log('in put:', req.body);
    

    pool.query(query, [req.body.qb.name, req.body.qb.score, req.body.qb.id])
        .then((response) => {
            console.log('admin PUT response', response);
        })
        .catch((error) => {
            console.log('admin PUT error', error);
        })
});

module.exports = router;