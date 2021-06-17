import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import removeMD from 'remove-markdown';

import TUIEditor from 'src/components/UI/editor/TUIEditor';
import ImageUploaderImpl from '@services/image_uploader';
import PostRepositoryImpl from '@services/post_repository';
import EditorMenus from 'src/components/UI/editor/EditorMenu';
import PostInfo from 'src/components/UI/editor/PostInfo';
import styled from '@emotion/styled';

import { useRecoilValue } from 'recoil';
import { isLoginState } from '@state/index';
import { getDate } from '@util/util';

const MAX_DESCRIPTION = 400;
const imageUploader = new ImageUploaderImpl();
const postRepository = new PostRepositoryImpl();

const emptyPost = {
  id: '',
  title: '',
  date: '',
  description: '',
  contents: '',
  tags: '',
};

type PostData = {
  id?: string;
  title: string;
  date: string;
  description: string;
  contents: string;
  tags: string;
};

interface Props {
  post?: PostData;
}

export default function EditorPage({ post }: Props) {
  const router = useRouter();
  const isLogin = useRecoilValue(isLoginState);

  const [postState, setPostState] = useState(post || emptyPost);
  const { title, tags, contents } = postState;

  useEffect(() => {
    if (!isLogin) router.push('/');
  }, [isLogin]);

  const addPost = async () => {
    if (!(title && tags && contents)) {
      alert('모든 내용을 입력해주세요');
      return;
    }

    const body = {
      title: title,
      date: getDate(),
      description: removeMD(contents, { useImgAltText: false }).slice(0, MAX_DESCRIPTION),
      tags: tags.replaceAll(/ /gi, ''),
      contents: contents,
    };

    // post 가 있으면 수정
    if (post) {
      const response = await postRepository.updatePost(post.id!, body);
      if (!response) {
        alert('post 수정 실패');
        return;
      }

      alert('post 수정 성공');
      router.push('/');
      return;
    }

    // post 없으면 추가하기
    const response = await postRepository.create(body);
    if (!response) {
      alert('post 작성 실패');
      return;
    }

    alert('post 작성 성공');
    router.push('/');
  };

  if (!isLogin) return null;
  return (
    <>
      <Head>
        <title>WRITE | SEUNGGYU</title>
      </Head>
      <Editor>
        <h1>좋은 블로그 내용을 작성하자!! 🔥🔥👋</h1>
        <PostInfo post={postState} setPost={setPostState} />

        <TUIEditor
          imageUploader={imageUploader}
          onChange={(value) => setPostState({ ...postState, contents: value })}
          initialValue={contents}
        />
        <EditorMenus updateMode={post ? true : false} addPost={addPost} />
      </Editor>
    </>
  );
}

const Editor = styled.div`
  padding: 20px;
`;
