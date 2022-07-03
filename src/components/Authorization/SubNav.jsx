import { Popover, Steps } from 'antd';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
const { Step } = Steps;
const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const SubNav = () => (
    <div className="subNav" style={{
        margin: "4%",
        padding:"3% 0%",
        border: "3px solid red",
        borderRadius: "50px"        
        }}>
        <Steps current={2} progressDot={customDot}>
            <Step title="Finished" />
            <Step title="In Progress"  />
            <Step title="Waiting"  />
            <Step title="Waiting"  />
        </Steps>
  </div>
);

export default SubNav;