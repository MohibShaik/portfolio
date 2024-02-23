import React, { useState } from 'react';
import data from '../config/projects.json';
import './projects.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Projects() {
  const [projectsData, setProjectsData] = useState(data);
  console.log(projectsData.projects);
  const projectsList = projectsData.projects;

  return (
    <div className='showroom-section'>
      <div className='showroom-title'>
        <h2>Showroom</h2>
      </div>

      <div className='showroom'>
        {projectsList.map((item, index) => (
          <Card className='project-card' key={index}>
            <Card.Img
              variant='top'
              src={item?.projectImage}
            />
            <Card.Body className='card-body'>
              <Card.Title className='card-title'>
                {item?.projectName}
              </Card.Title>
              <Card.Text>
                {item?.projectDescription}
              </Card.Text>
              {/* <Button variant='primary'>
                Go somewhere
              </Button> */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
