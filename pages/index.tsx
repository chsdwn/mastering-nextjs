import styled from 'styled-components';

const Title = styled.h1`
  font-size: 10px;
  background-color: black;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <div>
      <Title>styled-components</Title>
      <p className="title">styled-jsx</p>
      <style jsx>{`
        .title {
          font: 15px Helvetica, Arial, sans-serif;
          background: #eee;
          color: blue;
        }
      `}</style>
    </div>
  );
}
