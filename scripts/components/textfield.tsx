
import * as React from "react"

interface Props {
  label: string,
  name: string,
  value: string | number,
  tight?: boolean,
  placeholder: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField: React.SFC<Props> = (props) => {
  return <React.Fragment>
    <label htmlFor={props.name}>{props.label}</label>
    <input type="text" className={props.tight ? "input--tight" : undefined} name={props.name} id={props.name} value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
  </React.Fragment>
}