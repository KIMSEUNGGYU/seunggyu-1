import axios from "axios";

type PostData = {
  title: string;
  date: string;
  description: string;
  content: string;
  tags: string[];
};

interface PostRepository {
  create: (body: PostData) => void;
}

export default class PostRepositoryImpl implements PostRepository {
  create(body: PostData) {
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Test",
        date: "2021.04.07",
        description: "test description",
        tags: ["test"],
        content: body,
      }),
    };

    return fetch("http://localhost:4000/posts", option) //
      .then((response) => response.json())
      .catch((error) => console.log(`POST fetch error: ${error}`));
  }
  async read() {
    const response = await axios.get("http://localhost:4000/posts");
    return response.data;
  }
}
