import request from '@/request/request.ts';

export const test = data => {
  return request({
    url: '/login/cellphone',
    method: 'post',
    data
  });
};
