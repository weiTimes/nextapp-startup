import request from './request';

const getReactQuery = async () => {
  const { data } = await request({
    method: 'get',
    url: '/repos/tannerlinsley/react-query',
    baseURL: 'https://api.github.com',
  });

  return data;
};

const getInfo = async () => {
  const { data } = await request({ method: 'post', url: '/demo/getInfo' });

  return data;
};

export { getReactQuery, getInfo };
