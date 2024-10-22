const MostrarNumerosPares = ({numeros}) =>{

    return <>
    <ul>{'Números pares são:'}</ul>
    <ul>{numeros.map(numeros => {
        if (numeros % 2 === 0)

            return <li>{numeros}</li>
    })}</ul>

</>
}
export default MostrarNumerosPares;