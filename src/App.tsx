import { SkillsProvider } from "./context/Skills";
import { Skills } from "./components/Skills";
import { ToolBar } from "./components/ToolBar";
import { StageProvider } from "./context/Stage";
import { ClassProvider } from "./context/Class";
import { SideBar } from "./components/Sidebar";
import { AccessProvider } from "./context/Access";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <AccessProvider>
        <ClassProvider>
          <SkillsProvider>
            <StageProvider>
              <Skills />
            </StageProvider>
            <ToolBar />
            <SideBar />
          </SkillsProvider>
        </ClassProvider>
      </AccessProvider>
    </div>
  );
};

export default App;
