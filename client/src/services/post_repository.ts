import axios from 'axios';

import { TagData } from '@common/types';
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
    const result = await Promise.all([this.createPost(post), this.createTag(post.tags)]);
    return result.every((requestState) => requestState);
  }

  private async createPost(body: PostData) {
    const option = this.getPostOption({
      ...body,
      tags: body.tags.split(','),
    });
    const response = await fetch(`${BASE_URL}/posts`, option);
    return response.ok;
  }
  private async createTag(postTags: PostData['tags']) {
    const fetchedTags = await this.getTags();
    const tags = fetchedTags.map((tag: TagData) => tag.name);
    const newTags = postTags.split(',').filter((postTag: string) => !tags.includes(postTag));

    // 이미 태그가 존재하여 굳이 생성하지 않아도 됨
    if (!newTags.length) {
      return true;
    }

    const requests = newTags.map((tag) => {
      const option = this.getPostOption({ name: tag });
      try {
        return fetch(`${BASE_URL}/tags`, option);
      } catch (error) {
        console.error(`create Tag error: ${error}`);
        throw new Error(`create Tag error: ${error}`);
      }
    });

    // tag가 정상적으로 생성되는지 판단
    try {
      const result = await Promise.all(requests);
      return result.every((response) => response.ok);
    } catch (error) {
      console.error(`error: ${error}`);
    }
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
      console.log(`포스트 업데이트 오류: ${error}`);
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
