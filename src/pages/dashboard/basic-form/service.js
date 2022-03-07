import { request } from 'umi';
export async function fakeSubmitForm(params) {
  return request('/api/face', {
    method: 'POST',
    data: params,
  });
}
