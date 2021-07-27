import Tabs from '../Tabs';
import TypesOfAssistance from '../TypesOfAssistance'
import FormBtn from '../FormBtn';
export default function Form() {
    return (
      <form noValidate autoComplete="off">
        <Tabs />
        <TypesOfAssistance />
        <FormBtn/>
      </form>
    ) 
}