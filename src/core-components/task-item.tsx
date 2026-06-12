import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";

import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";

import { useState } from "react";

export default function TaskItem() {
  const [isEditing, setIsEditing] = useState(false);

  return(
  <Card size="md" className="flex items-center gap-4">
     {isEditing ? (
      <>
         <InputCheckbox />
      <Text className="flex-1"> fazendo compras da semana</Text>
      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
        <ButtonIcon icon={PencilIcon} variant="tertiary" />
      </div>
      </>
     ) : (
      <>Editamda¹¹</>
     ) }
    </Card>
  )
}