import React, { Component } from 'react';
// import { Button, Card } from 'react-md';
import Card from 'react-md/lib/Cards';
import Button from 'react-md/lib/Buttons';
import socialItems from 'assets/js/socialItems';

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
              >
                <Button
                  icon
                  iconClassName={socialItem.faIcon}
                />
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
