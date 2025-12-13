import { NavComponent } from './Navigation.tsx';
import { configure } from 'mobx';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: false,
})
/**
 * Put providers here if needed
 */
function App() {
  return (
      <NavComponent />
  );
}

export default App;
