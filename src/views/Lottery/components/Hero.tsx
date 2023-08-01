import styled, { keyframes } from 'styled-components'
import { Box, Flex, Heading, Skeleton, Balance } from '@pancakeswap/uikit'
import { LotteryStatus } from 'config/constants/types'
import { useTranslation } from '@pancakeswap/localization'
import { usePriceCakeUSD } from 'state/farms/hooks'
import { useLottery } from 'state/lottery/hooks'
import { getBalanceNumber } from '@pancakeswap/utils/formatBalance'
import BuyTicketsButton from './BuyTicketsButton'

export const floatingStarsLeft = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(10px, 10px);
  }
  to {
    transform: translate(0, -0px);
  }
`

export const floatingStarsRight = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-10px, 10px);
  }
  to {
    transform: translate(0, -0px);
  }
`

const floatingTicketLeft = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-10px, 15px);
  }
  to {
    transform: translate(0, -0px);
  }
`


const floatingTicketRight = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(10px, 15px);
  }
  to {
    transform: translate(0, -0px);
  }
`

const mainTicketAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(6deg);
  }
  to {
    transform: rotate(0deg);
  }
`
const formticket = styled.div`
background:red;
`
 
const TicketContainer = styled(Flex)`
`

const PrizeTotalBalance = styled(Balance)`
  background: ${({ theme }) => theme.colors.gradientGold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StyledBuyTicketButton = styled(BuyTicketsButton)<{ disabled: boolean }>`
background: rgb(5 255 0);
color: #FFF;
width: 150px;
height: 55px;
border-radius: 45px;
border: none;
background-color: #05FF00;
font-weight:initial;
color: white;
box-shadow: 0px 10px 10px rgb(2 53 1 / 44%) inset, 0px 5px 10px rgba(5,5,5,0.212), 0px -10px 10px rgb(55,255,0) inset;
cursor: pointer;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
    &:hover{
      opacity:1 !important;
    }
  ${({ theme }) => theme.mediaQueries.xs} {
    // width: 240px;
  }
`

const ButtonWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const RightDiv = styled.div`
  position:relative;
  background-color: #2c9229;
  width:100%;
  padding:20px;
  /* Add any other styles you want */

`;
const Banner = styled.div`
 position:relative;
`;
const LeftDiv = styled.div`
 position:relative;
`;



const Hero = () => {
  const { t } = useTranslation()
  const {
    currentRound: { amountCollectedInCake, status },
    isTransitioning,
  } = useLottery()

  const cakePriceBusd = usePriceCakeUSD()
  const prizeInBusd = amountCollectedInCake.times(cakePriceBusd)
  const prizeTotal = getBalanceNumber(prizeInBusd)
  const ticketBuyIsDisabled = status !== LotteryStatus.OPEN || isTransitioning

  const getHeroHeading = () => {
    if (status === LotteryStatus.OPEN) {
      return (
        <>
          {prizeInBusd.isNaN() ? (
            <Skeleton my="7px" height={60} width={190} />
          ) : (
            <PrizeTotalBalance fontSize="64px" bold prefix="$" value={prizeTotal} mb="8px" decimals={0} />
          )}
          <Heading mb="32px" scale="lg" color="#ffffff">
            {t('in prizes!')}
          </Heading>
        </>
      )
    }
    return (
      <Heading  mb="24px" scale="xl" color="#ffffff" textAlign="center">
        {t('Tickets on sale soon')}
      </Heading>
    )
  }

  return (

    <Banner className='row'>
      <LeftDiv className='col-8 leftdiv'>
        <div className="tickettitle">
          <h1>
          Buy Tickets
          </h1>
        </div>
      </LeftDiv>
    <RightDiv className='col-4 rightdiv'>
    <Flex flexDirection="column" alignItems="center" justifyContent="center" className='formticket'>
      <Heading style={{ zIndex: 1 }} mb="8px" scale="md" color="#ffffff" id="lottery-hero-title">
        {t('The PancakeSwap Lottery')}
      </Heading>
      {getHeroHeading()}
      <TicketContainer
        position="relative"
        width={['240px', '288px']}
        height={['94px', '113px']}
        alignItems="center"
        justifyContent="center"
      >
        <ButtonWrapper >
          <StyledBuyTicketButton className='Btn' disabled={ticketBuyIsDisabled}  />
        </ButtonWrapper>
      </TicketContainer>
    </Flex>
    </RightDiv>
    </Banner>
    // <Banner className='row'>
    //   <LeftDiv className='col-6 leftdiv'>
    //     <div className="hello">
    //       <video autoPlay muted>
    //         <source src="Images/v1.mp4" type="video/mp4" />
    //       </video>
    //     </div>
    //   </LeftDiv>
    // <RightDiv className='col-6 rightdiv'>
    // <Flex flexDirection="column" alignItems="center" justifyContent="center" className='formticket'>
    //   <Heading style={{ zIndex: 1 }} mb="8px" scale="md" color="#ffffff" id="lottery-hero-title">
    //     {t('The PancakeSwap Lottery')}
    //   </Heading>
    //   {getHeroHeading()}
    //   <TicketContainer
    //     position="relative"
    //     width={['240px', '288px']}
    //     height={['94px', '113px']}
    //     alignItems="center"
    //     justifyContent="center"
    //   >
    //     <ButtonWrapper >
    //       <StyledBuyTicketButton className='Btn' disabled={ticketBuyIsDisabled}  />
    //     </ButtonWrapper>
    //   </TicketContainer>
    // </Flex>
    // </RightDiv>
    // </Banner>

  
  )
}

export default Hero
