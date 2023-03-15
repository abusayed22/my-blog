import Input from "./allForms/Input"
import Textarea from "./allForms/Textarea"


function FormController(props) {
    const {control,...rest} = props
    
    switch (control) {
        case "input":
            return <Input {...rest}/>
        case "textarea":
            return <Textarea {...rest}/>
        case "select":
        case "radio":
        case "checkbox":
        case "date":

        
        default:
            return null
    }
}
export default FormController