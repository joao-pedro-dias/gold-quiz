import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

// eslint-disable-next-line react/prop-types
export default function QuizDaGaleraPage({ dbExterno }) {
  // const [db, setDb] React.useState({})
  // React.useEffect(() => {
  // });
  return (
    // eslint-disable-next-line react/prop-types
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        // eslint-disable-next-line react/prop-types
        externalQuestions={dbExterno.questions}
        // eslint-disable-next-line react/prop-types
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
    // {/* <pre style={{ color: 'black' }}>
    //   {JSON.stringify(dbExterno.questions, null, 4)}
    // </pre> */}
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto);
      // .catch((err) => {
      //   // console.error(err);
      // });

    // console.log('dbExterno', dbExterno);
    // console.log('Infos que o Next da para nós', context.query.id);
    return {
      props: {
        dbExterno,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
