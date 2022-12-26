import { SkillsProvider } from "./context/SkillsContext";
import { Skills } from "./components/Skills";
import { ToolBar } from "./components/ToolBar";
import { StageProvider } from "./context/StageContext";
import "./App.css";

/* 
<Line
  key={`line_${skill.id}`}
  id={`line_${skill.id}`}
  stroke="red"
  strokeWidth={5}
  lineCap="round"
  lineJoin="round"
  points={[
    skill.x + 50,
    skill.y + 50,
    connection.x + 50,
    connection.y + 50,
  ]}
  tension={1}
/> 
*/

function App() {
  const skills = [];

  /* const drawLines = () => {
    {
      return skills.map((skill) => {
        const connections = getSkills(skills, skill.connections);
        if (connections) {
          return connections.map((connection) => {
            dispatch(
              updateLines({
                skill,
                line: {
                  id: `line_${skill.id}`,
                  coords: [
                    skill.x + 50,
                    skill.y + 50,
                    connection.x + 50,
                    connection.y + 50,
                  ],
                },
              })
            );
          });
        }
      });
    }
  }; */

  return (
    <div className="App">
      <StageProvider>
        <SkillsProvider>
          <ToolBar />
          <Skills />
        </SkillsProvider>
      </StageProvider>
    </div>
  );
}

export default App;
