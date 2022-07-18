interface CreditCardProps {
    name: string;
    number: string;
    date: string;
    backgroundColor?: string;
}

export const CreditCard = ({ name, number, date, backgroundColor = '#e6e6e6'}: CreditCardProps) => {
  return (
    <div className='payment__card' style={{backgroundColor: backgroundColor}}>
        <div className='payment__card__number'>
            { number }
        </div>
        <div className='payment__card__date'>
            { date }
        </div>
        <div className='payment__card__title'>
            { name }
        </div>
        <div className='payment__card__red-circle'></div>
        <div className='payment__card__orange-circle'></div>
    </div>
  )
}
