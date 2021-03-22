import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
    {/* <Card>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>{variant} Card Title </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card> */}

      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          {/* <figure className='cards__item__pic-wrap' data-category={props.label}> */}
          {/* <i class={props.class} aria-hidden="true"></i> */}
            {/* <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure> */}
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;