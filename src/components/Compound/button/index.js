import React from 'react'
import {Button, InitButton, ActiveButton} from './Button'
const Index = () => {
  return (
    <div>
        <Button>
            <InitButton>Activate me</InitButton>
            <ActiveButton>Active Button</ActiveButton>
        </Button>
    </div>
  )
}

export default Index