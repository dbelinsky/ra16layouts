/* eslint-disable react/prop-types */
export function IconSwitch(props) {
  return (
    <div onClick={props.onSwitch} className='material-icons switch'>
      {props.icon}
    </div>
  );
}
