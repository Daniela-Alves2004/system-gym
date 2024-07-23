import "./Button.css";

function Button({label, className, image }) {
  return (
    <a >
      <button className={className}> 
        <img src={image}/>
        <span>  {label}</span>
      </button>
    </a>
  );
}

export default Button;
