import axios from 'axios';
import config from '../../config.json';

export const user = 'yunyuyuan',
  repo = 'pi-task'

async function post(data: any) {
  return await axios.post('https://api.github.com/graphql', {query: data}, {
    headers: {
      Authorization: 'token ' + config.gh_token
    }
  });
}

/** @description 获取文件内容 */
export async function getFileContent(path: string) {
  try {
    const result = await post(`query {
      repository(owner: "${user}", name: "${repo}") {
        object(expression: "HEAD:${path}") {
          ... on Blob {
            text
          }
        }
      }
    }`);
    const err = result.data.errors;
    if (!err) {
      return result.data.data.repository.object.text;
    }
  } catch (e) { }
}
