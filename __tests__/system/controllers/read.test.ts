import { readController } from '../../../src/controllers/read';

describe('Failure cases', () => {
  test('It should reject if started without context or request objects', async () => {
    // @ts-ignore
    await expect(readController()).resolves.toEqual(expect.objectContaining({ status: 400 }));
  });

  test('It should reject if passed in empty context or request objects', async () => {
    // @ts-ignore
    await expect(readController({}, {})).resolves.toEqual(expect.objectContaining({ status: 400 }));
  });
});

describe('Success cases', () => {
  test('It should return successfully if passing single ID', async () => {
    await expect(
      readController(
        // @ts-ignore
        {},
        {
          method: 'GET',
          query: {
            id: 'kj34kj3kj4j433-f-h65h5h5h'
          }
        }
      )
    ).resolves.toBeTruthy();
  });

  test('It should return successfully if passing no ID', async () => {
    // @ts-ignore
    await expect(readController({}, {})).resolves.toBeTruthy();
  });
});
