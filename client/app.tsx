import { React, ReactDOMServer } from '../deps.ts';
import CardsContainer from './Card_Components/CardsContainer.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h1: any;
      p: any;
    }
  }
}
const App = () => {
  return (
    <ObsidianWrapper>
      <div className="app">
        <CardsContainer></CardsContainer>
      </div>
    </ObsidianWrapper>
  );
};
export default App;
