import {Button} from "./button"

export const Buttons = (props) => {
    const { buttons } = props

    console.log(buttons)
    return (
        <div>
            {buttons.map((el, id) => (
                <Button key={id} sign={el.sign}/>
            ))}
        </div>
    )
}