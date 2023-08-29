import React, { useState } from 'react';
import data from '../config/tooling.json';
import './tooling.scss';

export function Tooling() {
  const [toolingData, setToolingData] = useState(data);
  console.log(toolingData.toolingList);
  const tempData = toolingData.toolingList;
  return (
    <div className='tooling'>
      <div className='tooling-title'>
        <h2>Tooling</h2>
      </div>
      <div className='tooling-box'>
        {tempData.map((animal, index) => (
          <div key={index} className='box-content'>
            <div className='box-text'>
              <p>{animal.toolName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
