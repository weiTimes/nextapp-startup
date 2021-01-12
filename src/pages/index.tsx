import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { Alert, message } from 'antd';
import { useQuery } from 'react-query';

import { Box } from '@/styles/common';
import CharacterCounter from '@/components/home/CharacterCounter';
import { getReactQuery, getInfo } from '@/services/home';
import BarItem from '@/components/layout/BarItem';
import ProductOptimCard from '@/components/towone/ProductOptim/ProductOptimCard';

const Container = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled(Box)`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Tip = styled(Alert)`
  background-color: #0aa;
  margin-bottom: 18px;

  .ant-alert-message {
    color: white;
  }

  &:hover {
    background-color: #fa0;
  }
`;

export default function Home() {
  const { data: myInfo, isLoading, error } = useQuery('getName', getInfo, {
    initialData: {
      name: 'unknown',
    },
    onSuccess: () => console.log('success'),
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  console.log(myInfo, 'myInfo');

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <Title mBottom={12}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </Title>
        <Title>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </Title>
        <Tip message='您已成功登陆~' />

        <CharacterCounter />

        <BarItem active>知识库</BarItem>

        <ProductOptimCard
          data={{ isMustDo: false, isFinish: false, title: '单品标题优化' }}
        />
      </Container>
    </div>
  );
}
