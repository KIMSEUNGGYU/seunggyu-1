import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { nameState } from '@state/index';
import React from 'react';

const About = () => {
  const [name, setNameState] = useRecoilState(nameState);

  const updateName = (e: any) => {
    setNameState(e.target.value);
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Hello, {name}</p>

      <input
        type="text"
        name="name"
        id="input_name"
        onChange={updateName}
        placeholder="Enter your name"
      />

      <Link href="/">Back to main</Link>
    </div>
  );
};

export default About;
