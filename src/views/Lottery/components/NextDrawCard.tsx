import { useState } from 'react'
import styled from 'styled-components'
import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Heading,
  Text,
  Skeleton,
  Button,
  useModal,
  Box,
  CardFooter,
  ExpandableLabel,
  Balance,
} from '@pancakeswap/uikit'
import { useAccount } from 'wagmi'
import { LotteryStatus } from 'config/constants/types'
import { useTranslation } from '@pancakeswap/localization'
import { usePriceCakeUSD } from 'state/farms/hooks'
import { useLottery } from 'state/lottery/hooks'
import { getBalanceNumber } from '@pancakeswap/utils/formatBalance'
import ViewTicketsModal from './ViewTicketsModal'
import BuyTicketsButton from './BuyTicketsButton'
import { dateTimeOptions } from '../helpers'
import RewardBrackets from './RewardBrackets'

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 20px;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-row-gap: 20px;
    grid-template-columns:auto;
  }
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
  ${({ theme }) => theme.mediaQueries.xs} {
    // width: 240px;
  }
`
const StyledCard = styled(Card)`
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 520px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 756px;
  }
`

const NextDrawWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 24px;
`

const NextDrawCard = () => {
  const {
    t,
    currentLanguage: { locale },
  } = useTranslation()
  const { address: account } = useAccount()
  const { currentLotteryId, isTransitioning, currentRound } = useLottery()
  const { endTime, amountCollectedInCake, userTickets, status } = currentRound

  const [onPresentViewTicketsModal] = useModal(<ViewTicketsModal roundId={currentLotteryId} roundStatus={status} />)
  const [isExpanded, setIsExpanded] = useState(false)
  const ticketBuyIsDisabled = status !== LotteryStatus.OPEN || isTransitioning

  const cakePriceBusd = usePriceCakeUSD()
  const prizeInBusd = amountCollectedInCake.times(cakePriceBusd)
  const endTimeMs = parseInt(endTime, 10) * 1000
  const endDate = new Date(endTimeMs)
  const isLotteryOpen = status === LotteryStatus.OPEN
  const userTicketCount = userTickets?.tickets?.length || 0

  const getPrizeBalances = () => {
    if (status === LotteryStatus.CLOSE || status === LotteryStatus.CLAIMABLE) {
      return (
        <Heading scale="xl" color="secondary" textAlign={['center', null, null, 'left']}>
          {t('Calculating')}...
        </Heading>
      )
    }
    return (
      <>
        {prizeInBusd.isNaN() ? (
          <Skeleton my="7px" height={40} width={160} />
        ) : (
          <Balance
            fontSize="40px"
            color="secondary"
            textAlign={['center', null, null, 'left']}
            lineHeight="1"
            bold
            prefix="~$"
            value={getBalanceNumber(prizeInBusd)}
            decimals={0}
          />
        )}
        {/* {prizeInBusd.isNaN() ? (
          <Skeleton my="2px" height={14} width={90} />
        ) : (
          <Balance
            fontSize="14px"
            color="textSubtle"
            textAlign={['center', null, null, 'left']}
            unit=" CAKE"
            value={getBalanceNumber(amountCollectedInCake)}
            decimals={0}
          />
        )} */}
      </>
    )
  }

  const getNextDrawId = () => {
    if (status === LotteryStatus.OPEN) {
      return `${currentLotteryId} |`
    }
    if (status === LotteryStatus.PENDING) {
      return ''
    }
    return parseInt(currentLotteryId, 10) + 1
  }

  const getNextDrawDateTime = () => {
    if (status === LotteryStatus.OPEN) {
      return `${t('Draw')}: ${endDate.toLocaleString(locale, dateTimeOptions)}`
    }
    return ''
  }

  const ticketRoundText =
    userTicketCount > 1
      ? t('You have %amount% tickets this round', { amount: userTicketCount })
      : t('You have %amount% ticket this round', { amount: userTicketCount })
  const [youHaveText, ticketsThisRoundText] = ticketRoundText.split(userTicketCount.toString())

  return (
    <StyledCard>
      <CardHeader p="16px 24px">
        <Flex justifyContent="space-between">
          <Heading mr="12px">{t('Next Draw')}</Heading>
          <Text>
            {currentLotteryId && `#${getNextDrawId()}`} {Boolean(endTime) && getNextDrawDateTime()}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Grid>
          <Flex justifyContent="space-between" alignItems="center" flexDirection="row">
            <Heading mt="15px">{t('Prize Pot')}</Heading>
            {getPrizeBalances()}

          </Flex>
          {/* <Flex flexDirection="column" mb="18px">
          </Flex> */}
          
          <Flex flexDirection={['column', null, null, 'row']} alignItems="center" justifyContent="space-between">
          <Box display={['none', null, null, 'flex']}>
            <Heading>{t('Your tickets')}</Heading>
          </Box>
            {isLotteryOpen && (
              <Flex
                flexDirection="column"
                mr={[null, null, null, '24px']}
                alignItems={['center', null, null, 'flex-start']}
              >
                {account && (
                  <Flex justifyContent={['center', null, null, 'flex-start']}>
                    <Text display="inline">{youHaveText} </Text>
                    {!userTickets.isLoading ? (
                      <Balance value={userTicketCount} decimals={0} display="inline" bold mx="4px" />
                    ) : (
                      <Skeleton mx="4px" height={20} width={40} />
                    )}
                    <Text display="inline"> {ticketsThisRoundText}</Text>
                  </Flex>
                )}
                {!userTickets.isLoading && userTicketCount > 0 && (
                  <Button
                    onClick={onPresentViewTicketsModal}
                    height="auto"
                    width="fit-content"
                    p="0"
                    mb={['32px', null, null, '0']}
                    variant="text"
                    scale="sm"
                  >
                    {t('View your tickets')}
                  </Button>
                )}
              </Flex>
            )}
            <StyledBuyTicketButton className='Btn' disabled={ticketBuyIsDisabled} maxWidth="280px" />
          </Flex>
        </Grid>
      </CardBody>
      <CardFooter p="0">
        {isExpanded && (
          <NextDrawWrapper>
            <RewardBrackets lotteryNodeData={currentRound} />
          </NextDrawWrapper>
        )}
        {(status === LotteryStatus.OPEN || status === LotteryStatus.CLOSE) && (
          <Flex p="8px 24px" alignItems="center" justifyContent="center">
            <ExpandableLabel expanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? t('Hide') : t('Details')}
            </ExpandableLabel>
          </Flex>
        )}
      </CardFooter>
    </StyledCard>
  )
}

export default NextDrawCard
