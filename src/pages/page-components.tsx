import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Container from "../components/container";
import Icon from "../components/icon";

import TrashIcon from "../assets/icons/trash.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";


export default function PageComponents() {
  return(
    <Container>
      <div className="flex gap-1">
       <Icon svg={TrashIcon} className="fill-pink-base"/>
      </div>

     <div>
       <Badge variant="secondary">5</Badge>
       <Badge variant="primary">2 de 5</Badge>
      </div>
      
      <div>
       <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>

      <div className="flex gap-1">
       <ButtonIcon icon={TrashIcon} />
       <ButtonIcon icon={TrashIcon} variant="secondary"/>
       <ButtonIcon icon={TrashIcon} variant="tertiary"/>
      </div>
    </Container>
  )
}