
import * as React from "react"
import { Link } from "react-router-dom"

interface Props {
  label: string,
  to?: string,
  big?: boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}


export const Button: React.SFC<Props> = (props) => {
  return props.to
    ? <Link className="button" to={props.to}>{props.label}</Link>
    : <button onClick={props.onClick}>{props.label}</button>
}