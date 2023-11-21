import { Tree, TreeNode } from 'react-organizational-chart';
import xlbPic from "./assets/xlb.png";
import baoPic from "./assets/bao.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{marginBottom: "50px"}}> XLB Tree</h1>
      <Tree lineWidth={'2px'}
    lineColor={'green'}
    lineBorderRadius={'10px'}
    label={<div>
        <img src={baoPic} width={80} alt="Bao"/>
        <h2>Eric</h2>
      </div>}>
        <TreeNode label={<div>Tristin</div>}>
          <TreeNode label={<div>Sergio</div>}>
            <TreeNode label={<div>Alyssa</div>}>
              <TreeNode label={<div>Hugh</div>}>
                <TreeNode label={<div>Owen</div>} />
                <TreeNode label={<div>Rebecca</div>} />
              </TreeNode>
              <TreeNode label={<div>Ethan</div>}>
                <TreeNode label={<div>Jeffrey</div>} />
              </TreeNode>
            </TreeNode>
            <TreeNode label={<div>Miguel</div>}>
              <TreeNode label={<div>Jae Won</div>} />
            </TreeNode>
          </TreeNode>
          <TreeNode label={<div>Aaron</div>}>
            <TreeNode label={<div>Nolan</div>}>
              <TreeNode label={<div>Catherine</div>} />
              <TreeNode label={<div>Brandon</div>} />
              <TreeNode label={<div>Prisca</div>} />
              <TreeNode label={<div>Roxanna</div>} />
            </TreeNode>
            <TreeNode label={<div>Jason</div>}>
              <TreeNode label={<div>Brighten</div>} />
            </TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode label={<div>Jennifer</div>}>
          <TreeNode label={<div>Jacob</div>}>
              <TreeNode label={<div>Charisse</div>}>
                <TreeNode label={<div>Andrew</div>} />
                <TreeNode label={<div>Stephanie</div>} />
              </TreeNode>
              <TreeNode label={<div>Justin</div>}>
                <TreeNode label={<div>Magnus</div>}>
                  <TreeNode label={<div>Brandon</div>} />
                </TreeNode>
                <TreeNode label={<div>Nathan</div>} />
              </TreeNode>
              <TreeNode label={<div>Taylin</div>} />
              <TreeNode label={<div>Ashley</div>} />
            </TreeNode>
            <TreeNode label={<div>Faith</div>}>
              <TreeNode label={<div>Grace</div>}>
                <TreeNode label={<div>Lina</div>}>
                  <TreeNode label={<div>Gloria</div>} />
                </TreeNode>
                <TreeNode label={<div>Brenton</div>}>
                  <TreeNode label={<div>Eric</div>} />
                  <TreeNode label={<div>Iris</div>} />
                </TreeNode>
              </TreeNode>
              <TreeNode label={<div>Connie</div>}>
                <TreeNode label={<div>Angela Hu</div>}>
                  <TreeNode label={<div>Khushi</div>} />
                  <TreeNode label={<div>Serena</div>} />
                </TreeNode>
                <TreeNode label={<div>Angela Tsai</div>}>
                  <TreeNode label={<div>Basil</div>} />
                  <TreeNode label={<div>Lisa</div>} />
                </TreeNode>
                <TreeNode label={<div>Nicole</div>} />
              </TreeNode>
        </TreeNode>
          </TreeNode>
      </Tree>
      <h1 style={{marginTop: "50px"}}>Past Reference Image</h1>
      <img src={xlbPic} alt="XLB Reference" width={800}></img>
    </div>
  );
}

export default App;
