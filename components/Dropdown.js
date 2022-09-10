import React from 'react'
import styled from 'styled-components'

const Dropdown = () => {
  return (
    <>
      <ul>
        <DropdownItem textPath="/about" text="About" />
        <DropdownItem textPath="/about" text="About" />
        <DropdownItem textPath="/about" text="About" />
        <DropdownItem textPath="/about" text="About" />
        <DropdownItem textPath="/about" text="About" />
      </ul>
    </>
  )
}

export default Dropdown

export const DropdownItem = ({ textPath, text }) => {
  return (
    <>
      <li>
        <a href={textPath}>{text}</a>
      </li>
    </>
  )
}
