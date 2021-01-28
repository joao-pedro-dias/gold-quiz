import React from 'react';
import styled from 'styled-components';
import Head from 'next/head'; // está vindo da pasta node_modules, onde já vem todas as dependências do nextJS. Por isso se chama biblioteca, vem tudo junto
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../scr/components/Widget';
import QuizLogo from '../scr/components/QuizLogo';
import QuizBackground from '../scr/components/QuizBackground';
import Footer from '../scr/components/Footer';
import GitHubCorner from '../scr/components/GitHubCorner';
import Input from '../scr/components/Input';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState(''); // ou seja, estou falando que o estado inicial do meu input é vazio. E quando altera o estado temos o setName
  console.log(name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz - GoldSystem</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault(); // retirar o evento padrão desta function
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <Input
                // eslint-disable-next-line react/jsx-no-bind
                onChange={function (infosDoEvento) {
                  console.log(name);
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Informe seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}
