import styled from 'styled-components';
import Jobsview from './components/Jobsview';
import PostOffer from './components/Postoffer';

function App() {
  return (
    <Wrapper>
      <Jobsview />
      <PostOffer />
    </Wrapper>
    
  );
}

export default App;

const Wrapper = styled.div`
  
`