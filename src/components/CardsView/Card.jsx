/* eslint-disable react/prop-types */
export function Card(props) {
  const { img, name, color, price } = props.item;
  return (
    <div className='card'>
      <img className='card-img' src={img} />
      <h3 className='card-title'>{name.toUpperCase()}</h3>
      <div className='card-color'>{color}</div>

      <div className='card-footer'>
        <div className='price'>{'$' + price}</div>
        <button className='add-to-card'>ADD TO CARD</button>
      </div>
    </div>
  );
}
