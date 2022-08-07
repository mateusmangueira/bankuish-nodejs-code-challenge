import nodeTest from "node:test";
import assert from "node:assert";
import { promisify } from 'node:util';


nodeTest('Course Integration Test Suite', async (t) => {
  const testPort = 9999;
  const { server } = await import('../../src/index.js');

  const testServerAddress = `http://localhost:${testPort}/courses`;

  await t.test('it should create a course', async (t) => {
    const data = {
      "desiredCourse": "PortfolioConstruction",
      "requiredCourses": "PortfolioTheories"
    }

    const res = await fetch(testServerAddress, {
      method: 'POST',
      body: JSON.stringify(data)
    })

    assert.deepStrictEqual(res.headers.get, 'content-type', 'application/json');
    assert.deepStrictEqual(res.status, 201);

    const result = await res.json();

    //uuid as a id, so must be a string bigger than 30 caracters
    assert.ok(result.id.length > 30, 'id should be a valid uuid');

  })
  await promisify(server.close.bind(server))();
}) 