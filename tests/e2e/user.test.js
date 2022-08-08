import nodeTest from "node:test";
import assert from "node:assert";
import { promisify } from 'node:util';

nodeTest('User Integration Test Suite', async (t) => {
  const testPort = process.env.PORT
  const { server } = await import('../../src/index.js');

  const testServerAddress = `http://localhost:${testPort}/users`;

  await t.test('it should create a user', async () => {
    const data = {}

    const req = await fetch(testServerAddress, {
      method: 'POST',
      body: JSON.stringify(data)
    })

    assert.deepStrictEqual(req.headers.get, 'content-type', 'application/json');
    assert.deepStrictEqual(req.status, 201);

    const result = await res.json();

    //uuid as a id, so must be a string bigger than 30 caracters
    assert.ok(result.userId.length > 30, 'userId should be a valid uuid');
  })

  await promisify(server.close.bind(server))();
}) 