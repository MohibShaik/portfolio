import './home-intro.scss';
import avator from '../images/avatar.png';

export function Home() {
  return (
    <div className='home'>
      <div className='home-intro'>
        <div className='content'>
          <div className='content-tertiary'>
            <p>
              <span>✌🏻</span>
              Hi there! I'm Mohib Shaik
            </p>
          </div>
          <div className='content-primary'>
            <h1>
              A<span>full-stack (MEAN/MERN) Engineer </span>
              . I help clients <span>Launch</span> and{''}
              <span> Grow </span> their products.
            </h1>
          </div>
          <div className='content-secondary'>
            <p>
              Passionate MEAN & MERN developer with 5+ years
              of experience creating efficient, scalable,
              and responsive web applications. Proficient in
              the entire web development stack and dedicated
              to producing high-quality code.
            </p>
          </div>
        </div>

        <div className='hero-icon'>
          <img
            className='avatar'
            src={avator}
            alt={'Photo of ' + 'mohib'}
          />
        </div>
      </div>
    </div>
  );
}
