import { SkillsProvider } from "./context/Skills";
import { Skills } from "./components/Skills";
import { ToolBar } from "./components/ToolBar";
import { StageProvider } from "./context/Stage";
import { ClassProvider } from "./context/Class";
import "./App.css";
import { SideBar } from "./components/Sidebar";

const App = () => {
  return (
    <div className="App">
      <ClassProvider>
        <SkillsProvider>
          <StageProvider>
            <Skills />
          </StageProvider>
          <ToolBar />
          <SideBar />
        </SkillsProvider>
      </ClassProvider>
    </div>
  );
};

export default App;
