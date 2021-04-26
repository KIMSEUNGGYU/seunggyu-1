import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import removeMD from 'remove-markdown';

import TUIEditor from '@ui/editor/TUIEditor';
import ImageUploaderImpl from '@services/image_uploader';
import PostRepositoryImpl from '@services/post_repository';
import EditorMenus from '@ui/editor/EditorMenu';
import PostInfo from '@ui/editor/PostInfo';
import styled from '@emotion/styled';
import { PostData } from '@common/types';

import { useRecoilValue } from 'recoil';
import { isLoginState } from '@state/index';

const MAX_DESCRIPTION = 400;
const imageUploader = new ImageUploaderImpl();
const postRepository = new PostRepositoryImpl();

function getDate() {
  const date = new Date();
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
}

interface Props {
  post?: PostData;
}

export default function WritePage({ post }: Props) {
  const router = useRouter();
  const isLogin = useRecoilValue(isLoginState);

  const [postTitle, setPostTitle] = useState((post && post.title) || '');
  const [postTags, setPostTags] = useState((post && post.tags.toString()) || '');
  const [postContents, setPostContents] = useState((post && post.contents) || '');

  useEffect(() => {
    if (!isLogin) router.push('/');
  }, [isLogin]);

  const handlePrev = () => router.push('/');
  const addPost = async () => {
    if (!(postTitle && postTags && postContents)) {
      alert('모든 내용을 입력해주세요');
      return;
    }

    const body = {
      title: postTitle,
      date: getDate(),
      description: removeMD(postContents, { useImgAltText: false }).slice(0, MAX_DESCRIPTION),
      tags: postTags.replaceAll(/ /gi, '').split(','),
      contents: postContents,
    };

    const response = await postRepository.create(body);
    if (!response) {
      alert('post 작성 실패');
      return;
    }

    alert('post 작성 성공');
    router.push('/');
  };

  const updatePost = async () => {
    if (!(postTitle && postTags && postContents)) {
      alert('모든 내용을 입력해주세요');
      return;
    }

    const body = {
      title: postTitle,
      description: removeMD(postContents, { useImgAltText: false }).slice(0, MAX_DESCRIPTION),
      tags: postTags.replaceAll(/ /gi, '').split(','),
      contents: postContents,
    };

    const response = post && (await postRepository.updatePost(post.id, body));
    if (!response) {
      alert('post 수정 실패');
      return;
    }

    alert('post 수정 성공');
    router.push('/');
  };

  if (!isLogin) return null;
  return (
    <Editor>
      <h1>좋은 블로그 내용을 작성하자!! 🔥🔥👋</h1>
      <PostInfo
        setPostTitle={setPostTitle}
        setPostTags={setPostTags}
        postTitle={postTitle}
        postTags={postTags}
      />

      <TUIEditor
        imageUploader={imageUploader}
        onChange={(value) => setPostContents(value)}
        initialValue={postContents}
      />
      <EditorMenus
        updateMode={post ? true : false}
        updatePost={updatePost}
        addPost={addPost}
        handlePrev={handlePrev}
      />
    </Editor>
  );
}

const Editor = styled.div`
  padding: 20px;
`;
