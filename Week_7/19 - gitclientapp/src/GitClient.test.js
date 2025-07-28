import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    const dummyResponse = {
      data: [
        { name: 'repo1', id: 1 },
        { name: 'repo2', id: 2 },
        { name: 'repo3', id: 3 }
      ]
    };

    axios.get.mockResolvedValue(dummyResponse);

    const result = await GitClient.getRepositories('techiesyed');

    expect(result.data).toEqual(dummyResponse.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/techiesyed/repos');
  });
});
