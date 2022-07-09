const infoLabel = (label) => {
    alert('A label desse botão é ' + label)
} 

const Button = ({label}) => {
    return <button onClick={() => infoLabel(label)}>Clique Aqui</button>
}

export default Button