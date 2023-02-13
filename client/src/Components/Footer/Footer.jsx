import React from 'react';
import * as AiIcons from 'react-icons/ai'
import * as GoIcons from 'react-icons/go'
import {useTranslation} from 'react-i18next'
import './footer.css';
const Footer = () => {
  const {t} = useTranslation();
  return (
    <div className='footer__container section__padding'>
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="column col-sm-4 col-md-3 item justify-content-center">
              <h3>Contact</h3>
              <p>Do not hesitate to send us an e-mail for any request for additional information.</p>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>Contact information</h3>
              <div className="eden__footer_line">
                <GoIcons.GoLocation className='footer__icon' />
                <p>000, St. Omrar Kadeh, Montplaisir 1073 Tunis, Tunisia</p>
              </div>
              <div className="eden__footer_line">
                <AiIcons.AiFillPhone className='footer__icon' />
                <p>(+216) 55 884 648</p>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 item social">
              <a href="https://www.facebook.com/profile.php?id=100087520522947"  target="_blank" rel="noreferrer"><i className="icon ion-social-facebook"></i></a>
              <a href="https://www.linkedin.com/"><i className="icon ion-social-linkedin"  target="_blank" rel="noreferrer"></i></a>
              <a href="https://www.youtube.com/channel/UC-XbeU5TJkWjmZWvh-Lvlog"  target="_blank" rel="noreferrer"><i className="icon ion-social-youtube"></i></a>
              <a href="https://www.instagram.com/edenlight216/?hl=fr" target="_blank" rel="noreferrer"><i className="icon ion-social-instagram"></i></a>
              <p className="copyright">
                <a href="https://www.facebook.com/profile.php?id=100085406739373" target="_blank" rel="noreferrer">
                  © Created by ONCA Solution - 2022 || {t('footer.rights')}
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </div>
  )
}

export default Footer