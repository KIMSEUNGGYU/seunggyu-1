import axios from "axios";

type PostData = {
  title: string;
  date: string;
  description: string;
  content: string;
  tags: string[];
};

interface PostRepository {
  create: (post: PostData) => void;
  read: () => any;
  detailRead: (id: any) => any;
}

export default class PostRepositoryImpl implements PostRepository {
  create(post: PostData) {
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: post,
    };

    return fetch("http://localhost:4000/posts", option) //
      .then((response) => response.json())
      .catch((error) => console.log(`POST fetch error: ${error}`));
  }
  async read() {
    const response = await axios.get("http://localhost:4000/posts/");
    return response.data;
  }

  async detailRead(id) {
    const response = await axios.get(`http://localhost:4000/posts/${id}`);
    return response.data;
  }
}
