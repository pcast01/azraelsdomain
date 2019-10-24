import React from "react"
import useDarkMode from "use-dark-mode"
import { FaRegSun, FaMoon } from "react-icons/fa"
import { Button, ButtonGroup } from "react-bootstrap"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <div>
      <ButtonGroup>
        <Button variant="light" onClick={darkMode.disable}>
          <FaRegSun />
        </Button>
        <Button variant="dark" onClick={darkMode.enable}>
          <FaMoon />
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default DarkModeToggle
