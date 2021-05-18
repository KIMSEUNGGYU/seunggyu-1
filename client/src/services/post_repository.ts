import axios from 'axios';

import { env } from 'src/constants/env';

import { PostData } from '@common/types';

interface PostRepository {
  create: (body: PostData) => void;
  read: () => any;
  detailRead: (id: string) => any;
  updatePost: (id: string, body: PostData) => any;
}

const BASE_URL = env.BASE_URL;

export default class PostRepositoryImpl implements PostRepository {
  // 생성
  async create(post: PostData) {
    const { tags, ...postData } = post;
    const tagList = tags.split(',');
    const option = this.getPostOption({ ...post, tags: tagList });
    const response = await fetch(`${BASE_URL}/posts`, option);

    return response.ok;
  }

  // 조회
  async read() {
    const response = await axios.get(`${BASE_URL}/posts/`);
    return response.data;
  }
  async getTags() {
    const response = await axios.get(`${BASE_URL}/tags/`);
    return response.data;
  }
  async detailRead(id: string) {
    const response = await axios.get(`${BASE_URL}/posts/${id}`);
    return response.data;
  }

  // 삭제
  async deletePost(id: string) {
    try {
      const response = await axios.delete(`${BASE_URL}/posts/${id}`);
      return response;
    } catch (error) {
      console.error(`deletePost error: ${error}`);
    }
  }

  // 수정
  async updatePost(id: string, body: PostData) {
    try {
      const option = this.getUpdateOption({
        ...body,
        tags: body.tags.split(','),
      });
      return fetch(`${BASE_URL}/posts/${id}`, option)
        .then((res) => res.ok)
        .catch((error) => `태그 생성 오류: ${error}`);
    } catch (error) {
      console.error(`포스트 업데이트 오류: ${error}`);
    }
  }

  private getPostOption(body: any) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  }

  private getUpdateOption(body: any) {
    return {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  }
}
