import './App.css';
import { Sitebar } from './layout/sitebar/Sitebar';
import styled from 'styled-components';
import { Main } from './layout/main/Main';
import { Services } from './layout/sections/services/Services';

function App() {
  return (
    <div className="App">
      <MainSection>
        <Sitebar />
        <Main />
      </MainSection>
      <Services />
    </div>
  );
}

export default App;

const MainSection = styled.section`
  max-width: 1440px;
  display: flex;
`;
