import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { useState } from 'react'

// const StyledButtonMenuItem = styled(ButtonMenuItem)<{ disabled: boolean }>`
//   background:rgb(151, 95, 255);

// `

const HistoryTabMenu = ({ setActiveIndex, activeIndex }) => {
  const { t } = useTranslation()

  // Step 2: Create a state variable and a function to update its value
  const [isToggled, setIsToggled] = useState(false);

  // Step 3: Update setActiveIndex to toggle the state variable value
  const handleItemClick = (index) => {
    setActiveIndex(index);
    setIsToggled((prevValue) => !prevValue);
  };


  return (
    <ButtonMenu activeIndex={activeIndex} onItemClick={handleItemClick} scale="sm" variant="subtle">
    {/* Add a conditional class to style the button based on the isToggled state */}
    <ButtonMenuItem className={isToggled ? '' : 'toggled'}>
      {t('All History')}
    </ButtonMenuItem>
    <ButtonMenuItem className={!isToggled ? '' : 'toggled'}>
      {t('Your History')}
    </ButtonMenuItem>
  </ButtonMenu>
  )
}

export default HistoryTabMenu
