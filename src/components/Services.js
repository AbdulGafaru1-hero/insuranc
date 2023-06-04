import React from 'react';
import './Services.css';
import { FcGraduationCap } from 'react-icons/fc';
import { FcPortraitMode } from 'react-icons/fc';
import { FcDebt} from 'react-icons/fc';
import { FcConferenceCall } from 'react-icons/fc';
import { FcPlus } from 'react-icons/fc';
import { FaHandHoldingMedical } from 'react-icons/fa';

function Services() {
  return (
    <>
    <div className="partners">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/2560px-Walmart_logo.svg.png" alt="" />

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" alt="" />

        <img className='fedex' src="https://ja-africa.org/wp-content/uploads/2020/02/FedEx-Logo-PNG-Transparent.png" alt="" />

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Dropbox_logo_2017.svg/2560px-Dropbox_logo_2017.svg.png" alt="" />

        <img src="https://www.pngitem.com/pimgs/m/96-961724_chase-bank-logo-logotype-chase-bank-blue-logo.png" alt="" />

    </div>
    <div className="salesCopy">
        <h3>Arrange for comfortable Life from now!</h3>
        <p>The insured receives a contract, called insurance <br /> which details the conditions and circumstances under <br /> which the insurer will compensate.</p>
    </div>
    <div className="services">
        <div className="service">
            < FcGraduationCap className='serviceIcons'/>
            <h3>Education Insurance</h3>
            <p>Most complicated aspect which science <br /> 
            of ratemaking use to approximate</p>
        </div>
        <div className="service">
            < FcPortraitMode className='serviceIcons'/>
            <h3>Newborn Insurance</h3>
            <p>Most complicated aspect which science <br /> 
            of ratemaking use to approximate</p>
        </div>
        <div className="service">
            < FaHandHoldingMedical className='serviceIcons medical'/>
            <h3>Medical Insurance</h3>
            <p>Most complicated aspect which science <br /> 
            of ratemaking use to approximate</p>
        </div>
        <div className="service">
            < FcPlus className='serviceIcons'/>
            <h3>Life Insurance</h3>
            <p>Most complicated aspect which science <br /> 
            of ratemaking use to approximate</p>
        </div>
        <div className="service">
            < FcDebt className='serviceIcons'/>
            <h3>Finance Insurance</h3>
            <p>Most complicated aspect which science <br /> 
            of ratemaking use to approximate</p>
        </div>
        <div className="service">
            < FcConferenceCall className='serviceIcons'/>
            <h3>Family Insurance</h3>
            <p>Most complicated aspect which science <br /> 
            of ratemaking use to approximate</p>
        </div>
        
    </div>
    </>
  )
}

export default Services