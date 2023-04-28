import { useState } from "react";

type CheckboxWithLabelProps = {
  labelOn: string
  labelOff: string
}
const CheckboxWithLabel = ({ labelOn, labelOff }: CheckboxWithLabelProps) => {
  const [isChecked, setIsChecked] = useState(false)
  const onChange = () => {
    setIsChecked(prev => !prev)
  }

  return (
    <label htmlFor="">
      <input type="checkbox" checked={isChecked} onChange={onChange}/>
      {isChecked ? labelOn : labelOff}
    </label>
  )
}

export default CheckboxWithLabel