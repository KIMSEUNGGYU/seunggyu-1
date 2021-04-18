import axios from "axios";

type PostData = {
  title: string;
  date: string;
  description: string;
  contents: string;
  tags: string[];
};

interface PostRepository {
  create: (post: PostData) => void;
  read: () => any;
  detailRead: (id: string) => any;
}

export default class PostRepositoryImpl implements PostRepository {
  // 생성
  async create(post: PostData) {
    return Promise.all([this.createPost(post), this.createTag(post)])
      .then(([fetchPost, fetchTag]) => (fetchPost && fetchTag ? true : false))
      .catch((error) => console.error(`포스트 생성 에러: ${error}`));
  }

  async createPost(post: PostData) {
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: post.title,
        date: post.date,
        description: "test description",
        tags: post.tags,
        contents: post.contents,
      }),
    };
    return fetch("http://localhost:4000/posts", option)
      .then((res) => res.ok)
      .catch((error) => `태그 생성 오류: ${error}`);
  }
  async createTag(post: PostData) {
    const fetchedTags = await this.getTags();
    const tags = fetchedTags.map((tag) => tag.tag);

    // tag 가 있다면.. 새로운 tag 추가해야함
    const newTags = post.tags.filter((postTag) => !tags.includes(postTag));
    if (newTags.length) {
      const requests = newTags.map((tag) => {
        const option = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tag }),
        };
        return fetch("http://localhost:4000/tags", option);
      });

      return Promise.all(requests)
        .then((res) => {
          return res.every((r) => r.ok) ? true : false;
        })
        .catch((error) => `태그 생성 오류: ${error}`);
    }
  }

  // 조회
  async read() {
    const response = await axios.get("http://localhost:4000/posts/");
    return response.data;
  }
  async getTags() {
    const response = await axios.get("http://localhost:4000/tags/");
    return response.data;
  }
  async detailRead(id: string) {
    const response = await axios.get(`http://localhost:4000/posts/${id}`);
    return response.data;
  }

  // 삭제
  async deletePost(id: number) {
    try {
      const response = await axios.delete(`http://localhost:4000/posts/${id}`);
      return response;
    } catch (error) {
      console.error(`deletePost error: ${error}`);
    }
  }
}
