import styled from 'styled-components';

import db from '../../db.json';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import Widget from '../components/Widget';
import GitHubCorner from '../components/GitHubCorner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Esse é o titulo</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Texto de descrição</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Esse é o titulo</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Texto de descrição</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gustavo2892?tab=repositories"/>
    </QuizBackground>
  );
}
