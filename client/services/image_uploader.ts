import { ImageUploader } from "@common/types";

export default class ImageUploaderImpl implements ImageUploader {
  async upload(file: any) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.NEXT_PUBLIC_IMAGE_UPLOAD_PRESET);

    const result = await fetch(process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL, {
      method: "POST",
      body: data,
    });

    return await result.json();
  }
}
