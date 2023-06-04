import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';
import { GiSmokingFinger } from 'react-icons/gi';
import { TbCertificate2 } from 'react-icons/tb';
import './CTA.css';

function CTA() {
  return (
    <div className='cta'>
<div className="ctaLeft">
    <div className="ctaLeft-card">
    <FaPhoneAlt className='ctaIcon green'/>
    <p>Cs Available 24 Hours</p>
    </div>
    <div className="ctaLeft-card outline">
    <GiSmokingFinger className='ctaIcon yellow'/>
    <p>Make Insurance Simple</p>
    </div>
    <div className="ctaLeft-card outline">
    <TbCertificate2 className='ctaIcon orange'/>
    <p>Officially Cartified</p>
    </div>
</div>
<div className="ctaCenter">
    
    <div className="lineTop"></div>
    <div className="lineDown"></div>

   <div className="circle">

    <div className="circleOne">
    <div className="circleBig"></div>
    <div className="circleSmall"></div>
    </div>

<div className="circleTwo">
    <div className="circleBig gray"></div>
    <div className="circleSmall"></div>
    </div>

    <div className="cirleThree">
    <div className="circleBig gray"></div>
    <div className="circleSmall"></div>
    </div>
    </div> 

</div>
<div className="ctaRight">
    <h3>We promise to always try <br />  and give the best</h3>
    <p>At the same time, the first insurance shemes the uderwriting of business ventures become available.<br /> By the end of the seventh century .</p>
    <p>London's growth as a centre for trade <br /> increasing due to the demand for marine insurance</p>
    <p>The underwriting of business ventures became available<br /> By the end of the seventeenth cwentury. At the same time,<br />
    the first insurance schemes</p>
</div>

    </div>
  )
}

export default CTA