import React from 'react';
import styled from 'styled-components';

interface IProductOptimCardProps {
  data: {
    isMustDo: boolean;
    isFinish: boolean;
    title: string;
  };
}

const Container = styled.div`
  width: 452px;
  height: 276px;
  background: #fefeff;
  border: 1px solid #edf0fa;
  box-shadow: 0px 4px 14px 0px rgba(0, 10, 71, 0.07);
`;
const Content = styled.div`
  height: 225px;
  background: #fff;
  padding-top: 21px;
  padding-left: 20px;
  position: relative;
`;
const Footer = styled.div`
  height: 50px;
  background: #f7f8fa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 20px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 14px;
`;
const Badge = styled.div<{ isMustDo: boolean }>`
  width: 37px;
  height: 21px;
  background: ${({ isMustDo }) => (isMustDo ? '#0af' : '#999999')};
  font-weight: bold;
  color: #fefeff;
  font-size: 12px;
  border-radius: 11px 2px 11px 11px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  font-size: 14px;
  color: #666666;
  margin-bottom: 14px;
`;
const MoreText = styled.a`
  font-size: 14px;
  color: #333333;
`;
const FinishButton = styled.div<{ isFinish: boolean }>`
  width: 60px;
  height: 28px;
  background: ${({ isFinish }) => (isFinish ? '#999' : '#046eff')};
  color: #fefeff;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ProductOptimCard: React.FC<IProductOptimCardProps> = ({ data }) => {
  const { isMustDo, isFinish, title } = data;

  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Text>1、尺寸：800 x 800px</Text>
        <Text>2、卖点提炼文字展示（针对同款多、标品类目）</Text>
        <Text>3、产品占图片三分之二</Text>
        <Text>4、参考五家淘宝以及阿里优秀类似款主图（按成交金额排序）</Text>
        <Badge isMustDo={isMustDo}>必做</Badge>
      </Content>
      <Footer>
        <MoreText>更多教程</MoreText>
        <FinishButton isFinish={isFinish}>完成了</FinishButton>
      </Footer>
    </Container>
  );
};

export default ProductOptimCard;
