


function Input ({type, name, id, label} ){

   
   

    return (
        <>
        <label>{label}</label>
        <input type={type} name={name} id={id}/>

      
        </>
    )
}
export default Input;
