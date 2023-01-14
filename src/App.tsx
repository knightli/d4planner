import { SkillsProvider } from "./context/SkillsContext";
import { Skills } from "./components/Skills";
import { ToolBar } from "./components/ToolBar";
import { StageProvider } from "./context/StageContext";
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
