import { createController } from '../../../src/controllers/create';

describe('Failure cases', () => {
  test('It should reject an error if started without context or request objects', async () => {
    // @ts-ignore
    await expect(createController()).resolves.toEqual(expect.objectContaining({ status: 400 }));
  });

  test('It should fail if not provided all required body arguments', async () => {
    await expect(
      createController(
        // @ts-ignore
        {},
        {
          method: 'POST',
          body: {
            asdf: 123
          }
        }
      )
    ).resolves.toEqual(expect.objectContaining({ status: 400 }));
  });
});

describe('Success cases', () => {
  test('It should return successfully if passed valid input data', async () => {
    await expect(
      createController(
        // @ts-ignore
        {},
        {
          method: 'POST',
          body: {
            id: '289037',
            category: 'asdf',
            name: 'asdf',
            description: 'asdf'
          }
        }
      )
    ).resolves.toBeTruthy();
  });
});
