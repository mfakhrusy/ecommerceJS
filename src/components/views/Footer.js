/* eslint-disable */
import React, { Component } from 'react';
// import { Button, Card } from 'react-md';
import Card from 'react-md/lib/Cards';
// import Button from 'react-md/lib/Buttons';
import socialItems from 'assets/js/socialItems';
import Linkedin from 'assets/svg/linkedin.svg';
import Twitter from 'assets/svg/twitter.svg';
import Globe from 'assets/svg/globe.svg';
import Github from 'assets/svg/github.svg';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Card className="FooterSocial">
          {socialItems.map(socialItem => (
            <div
              key={socialItem.id}
              className="FooterSocialItem"
            >
              <a
                href={socialItem.url}
                target="_blank"
                rel="noopener"
              >
                {/* <Button
                  icon
                  iconClassName={socialItem.faIcon}
                /> */}
                {/* <img src={socialItem.localFaIcon} alt={socialItem.label} /> */}
                {/* {socialItem.localFaIcon} */}
                {socialItem.localFaIcon}
              </a>
            </div>
          ))}
        </Card>
        <Card className="FooterNotice">
          <p>mfakhrusy - 2018</p>
        </Card>
      </div>
    );
  }
}

export default Footer;
