import { updateController } from '../../../src/controllers/update';

describe('Failure cases', () => {
  test('It should reject an error if started without context or request objects', async () => {
    // @ts-ignore
    await expect(updateController()).resolves.toEqual(expect.objectContaining({ status: 400 }));
  });

  test('It should fail if not provided all required body arguments', async () => {
    await expect(
      updateController(
        // @ts-ignore
        {},
        {
          method: 'PATCH',
          body: {
            asdf: 123
          }
        }
      )
    ).resolves.toEqual(expect.objectContaining({ status: 400 }));
  });
});

describe('Success cases', () => {
  test('It should return updated object if passed valid input data', async () => {
    await expect(
      updateController(
        {
          // @ts-ignore
          body: '',
          query: ''
        },
        {
          method: 'PATCH',
          query: {
            id: '289037',
            category: 'asdf',
            name: 'asdf',
            description: 'asdf'
          }
        }
      )
    ).resolves.toEqual(
      expect.objectContaining({
        body: {
          id: '289037',
          category: 'asdf',
          name: 'asdf',
          description: 'asdf'
        }
      })
    );
  });
});
