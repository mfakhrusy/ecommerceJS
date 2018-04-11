import React from 'react';
import PropTypes from 'prop-types';

const numberToIDRString = (num) => {
  // check how many thousand it has
  // const thousands = Math.floor((String(num).length) / 3);
  const numArr = String(num).split('');
  const digit = numArr.length;
  const thousands = Math.floor(digit / 3);
  for (let i = 0; i < thousands; i += 1) {
    numArr.splice(digit - (3 * (i + 1)), 0, '.');
  }
  const answer = `Rp ${numArr.join('')},-`;
  return answer;
};

const ModalInfoPrice = ({ price }) => (
  <div className="ModalInfoPrice">
    {price === 0 ? 'FREE' : numberToIDRString(price)}
  </div>
);

ModalInfoPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

export default ModalInfoPrice;
