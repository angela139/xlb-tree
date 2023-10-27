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
        <img src={baoPic} width={80}/>
        <h2>Eric</h2>
      </div>}>
        <TreeNode label={<div>Tristin</div>}>
          <TreeNode label={<div>Sergio</div>}>
            <TreeNode label={<div>Alyssa</div>}>
              <TreeNode label={<div>Hugh</div>} />
              <TreeNode label={<div>Ethan</div>} />
            </TreeNode>
            <TreeNode label={<div>Miguel</div>}>
              <TreeNode label={<div>Jae Won</div>} />
            </TreeNode>
          </TreeNode>
          <TreeNode label={<div>Aaron</div>}>
            <TreeNode label={<div>Nolan</div>}>
              <TreeNode label={<div>Catherine</div>} />
              <TreeNode label={<div>Brandon</div>} />
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
                <TreeNode label={<div>Magnus</div>} />
                <TreeNode label={<div>Nathan</div>} />
              </TreeNode>
            </TreeNode>
            <TreeNode label={<div>Faith</div>}>
              <TreeNode label={<div>Grace</div>}>
                <TreeNode label={<div>Lina</div>} />
                <TreeNode label={<div>Brenton</div>} />
              </TreeNode>
              <TreeNode label={<div>Connie</div>}>
                <TreeNode label={<div>Angela x2</div>} />
                <TreeNode label={<div>Nicole</div>} />
              </TreeNode>
        </TreeNode>
          </TreeNode>
      </Tree>
      <h1 style={{marginTop: "50px"}}>Reference Image</h1>
      <img src={xlbPic} alt="XLB Reference" width={800}></img>
    </div>
  );
}

export default App;
