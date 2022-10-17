import './Page2.css';
import luke from './images/luke.png'
import azel from './images/azel.png'
import edward from './images/edward.png'
import fin from './images/fin.jpg'

function Page2() {
  return (
    <>


      <div className='flex2'>
      <h1>Edward</h1>

        <div className='menu'>

          <button className='btn'>
            <p>
              <img src={luke} alt="Luke Bolton" height="220" width="220" />
            </p>
          </button>

          <br></br>

          <button className='btn'>
            <p>
              <img src={azel} alt="Azel Smith" height="220" width="220" />
            </p>
          </button>

          <br></br>

          <button className='btn'>
            <p>
              <img src={edward} alt="Edward Seokolo" height="220" width="220" />
            </p>
          </button>
        </div>
      </div>

      <div className='vague'>
 
        <p>
          <img src={fin} alt="vague" height="100%" width="100%" />
        </p>
      </div>

    </>
  );
}

export default Page2;