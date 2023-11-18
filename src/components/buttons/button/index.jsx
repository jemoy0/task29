export const Button = (props) => {

    console.log(props.sign)

    const calc = () => {
        if (props.sign === "+") {
            document.getElementById("result").value = Number(document.getElementById("1").value) + Number(document.getElementById("2").value)
        } else if (props.sign === "-") {
            document.getElementById("result").value = Number(document.getElementById("1").value) - Number(document.getElementById("2").value)
        } else if (props.sign === "/") {
            document.getElementById("result").value = Number(document.getElementById("1").value) / Number(document.getElementById("2").value)
        } else if (props.sign === "*") {
            document.getElementById("result").value = Number(document.getElementById("1").value) * Number(document.getElementById("2").value)
        } else if (props.sign === "^") {
            document.getElementById("result").value = Number(document.getElementById("1").value) ** Number(document.getElementById("2").value)
        }
      }
    
    return (
        <button onClick={calc}>{props.sign}</button>
    )
}