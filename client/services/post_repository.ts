import axios from "axios";

interface PostRepository {
  create: (body: string) => void;
}

export default class PostRepositoryImpl implements PostRepository {
  create(body: string) {
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
      .then((response) => response)
      .catch((error) => console.log(`POST fetch error: ${error}`));
  }
  async read() {
    const response = await axios.get("http://localhost:4000/posts");
    return response.data;
  }
}
