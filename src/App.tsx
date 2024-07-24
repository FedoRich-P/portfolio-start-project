import './App.css';
import { Sitebar } from './layout/sitebar/Sitebar';
import styled from 'styled-components';
import { Services } from './layout/main/services/Services';
import { Header } from './layout/main/Header';
import { FlexWrapper } from './components/flex/FlexWrapper';
import { Plans } from './layout/main/plans/Plans';
import { Recom } from './layout/main/recommendations/RecomWrapper';
import { Nav } from './layout/nav/Nav';

function App() {
  return (
    <FlexWrapper $align="fles-start" $wrap="wrap">
      <Sitebar />
      <MainSection>
        <Header />
        <Services />
        <Plans />
        <Recom />
      </MainSection>
      <Nav />
    </FlexWrapper>
  );
}

export default App;

const MainSection = styled.main``;
