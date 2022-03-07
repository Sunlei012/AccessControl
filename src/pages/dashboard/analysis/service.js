import { request } from 'umi';
export async function fakeChartData() {
  return request('/api/intruder');
}
export async function fakeChecked(params){
  return request('/api/checked',{
    params,
    method: 'POST'
  });
}
