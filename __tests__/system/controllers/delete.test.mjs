import { deleteController } from '../../../dist/src/app/controllers/delete.js';

describe('Failure cases', () => {
  test('It should reject if started without context or request objects', async () => {
    await expect(deleteController()).rejects.toThrow();
  });

  test('It should reject if passed in empty context or request objects', async () => {
    await expect(deleteController({}, {})).resolves.toEqual(
      expect.objectContaining({ status: 400 })
    );
  });

  test('It should fail if missing "id" field', async () => {
    await expect(
      deleteController(
        {},
        {
          method: 'DELETE',
          body: {
            asdf: 123
          }
        }
      )
    ).resolves.toEqual(expect.objectContaining({ status: 400 }));
  });

  test('It should fail if passed an invalid body shape', async () => {
    await expect(
      deleteController(
        {},
        {
          method: 'DELETE',
          body: {
            asdf: 'lk23j'
          }
        }
      )
    ).resolves.toEqual(expect.objectContaining({ status: 400 }));
  });

  test('It should fail if passed a null ID', async () => {
    await expect(
      deleteController(
        {},
        {
          method: 'DELETE',
          body: {
            id: null
          }
        }
      )
    ).resolves.toEqual(expect.objectContaining({ status: 400 }));
  });
});

describe('Success cases', () => {
  test('It should return successfully if passed valid input data', async () => {
    await expect(
      deleteController(
        {},
        {
          method: 'DELETE',
          query: {
            id: 'hjsdkhdfs4bsw3483y'
          }
        }
      )
    ).resolves.toBeTruthy();
  });
});
