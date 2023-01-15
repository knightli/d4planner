import { SkillsProvider } from "./context/Skills";
import { Skills } from "./components/Skills";
import { ToolBar } from "./components/ToolBar";
import { StageProvider } from "./context/Stage";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <SkillsProvider>
        <StageProvider>
          <Skills />
        </StageProvider>
        <ToolBar />
      </SkillsProvider>
    </div>
  );
};

export default App;
