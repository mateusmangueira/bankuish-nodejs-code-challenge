import test from "node:test";
import assert from "node:assert";
import { promisify } from 'node:util';


test('Course Integration Test Suite', async (t) => {
  const testPort = process.env.PORT
  const { server } = await import('../../src/index.js');

  const testServerAddress = `http://localhost:${testPort}/courses`;

  await t.test('it should create a course', async () => {
    const data = {
      "desiredCourse": "Investment",
      "requiredCourse": "Finance",
      "order": 0
    }

    const req = await fetch(testServerAddress, {
      method: 'POST',
      body: JSON.stringify(data)
    })

    assert.deepStrictEqual(req.headers.get, 'content-type', 'application/json');
    assert.deepStrictEqual(req.status, 201);

    const result = await res.json();

    //uuid as a id, so must be a string bigger than 30 caracters
    assert.ok(result.courseId.length > 30, 'courseId should be a valid uuid');

  })
  await promisify(server.close.bind(server))();
}) 