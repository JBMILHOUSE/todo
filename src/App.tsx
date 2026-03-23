import TrashIcon from "./assets/icons/trash.svg?react";
import Icon from "./components/icon";

function App() {
  return (
   <div>

    <div className="flex gap-1">
      <Icon svg={TrashIcon} className="fill-pink-base"/>
    </div>
   </div>
  )
}

export default App
