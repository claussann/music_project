import './Bottone.css'
function Button({ children, onClick, onChange }) {
    return <button id="bottone" onClick={onClick} onChange={onChange}>{children}</button>
}
export default Button