const alertLabel = (label) => {
    alert(`A label desse botão é ${label}`)
} 

const Button = ({label}) => {
    return <button onClick={() => alertLabel(label)}>Clique Aqui</button>
}

export default Button