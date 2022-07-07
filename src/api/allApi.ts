import request from '@/request/request.ts';
const baseUrl = 'https://cloud-music-api-lake.vercel.app/';

export const test = data => {
  return request({
    url: `${baseUrl}artist/list?type=1&area=96&initial=b`,
    method: 'get',
    data
  });
};
