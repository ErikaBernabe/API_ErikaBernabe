import asser from 'node:assert';
import test from 'node:test';
import * as areas from "../src/areas.js"
import { assert } from 'node:console';

test("Si le mando un 2 debe dar 4",()=>{
    let res = areas.areaCuadrado(2);
    assert.strictEqual(res,4);
})