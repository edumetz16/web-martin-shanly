type Award = {
  type: 'Winner' | 'Nominee',
  year: number,
  nomination: string,
}

export type AwardsEvent = {
  name: string,
  awards: Award[]
}

export const PortfolioAwards = ({title, events, children}: {title?: string,events: AwardsEvent[], children?: React.ReactNode}) =>{
  return (
    <>
      {title && <p className="font-bold text-xl mb-8">{title}</p>}
      {
        events.map((event,i) => (
          <div className="mb-8" key={i}>
            <h3 className="border-l-4 border-yellow-800 text-lg px-4 mb-2">{event.name}</h3>
            <>
              {event.awards.map((award,j)=>(
                <p key={j}>
                  {award.year} {award.type === 'Winner'?<b>{award.type}</b>:award.type} - <b>{award.nomination}</b>
                </p>
              ))}
            </>
          </div>
        ))
      }
    </>
  )
}