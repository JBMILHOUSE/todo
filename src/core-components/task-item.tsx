import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";


export default function TaskItem() {
  
  return(
  <Card size="md" className="flex items-center gap-3">
      <InputCheckbox />
      <Text>Fazer compras da semana</Text>
      <div className="flex gap-1">
        <ButtonIcon icon={} />
      </div>
    </Card>
  )
}