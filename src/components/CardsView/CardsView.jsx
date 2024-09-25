/* eslint-disable react/prop-types */
import { Card } from './Card';
export function CardsView(props) {
  let index = 0;

  return (
    <div className={props.atCard ? 'cards' : 'cards cards-list'}>
      {props.items.map((item) => (
        <Card key={index++} item={item} />
      ))}
    </div>
  );
}
