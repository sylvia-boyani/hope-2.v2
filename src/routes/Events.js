import {useState} from 'react'
import './events.css'

function Events(){
const [cards] = useState([
    {
        title: 'AGM',
        text: `This year's Annual general meeting will stil 
        be at the Headquaters Laki sama on 23 July 2023. 
        For more direction click the button below.
         `
    },
    {
        title: 'Children Ministry',
        text: `The Children ministry will be hosting a camp at 
        Limuru this August to involve all ministry sunday schools
        from Nairobi area. More infor to be disbursed on due time. 
        
         `
    },
    {
        title: 'Men Ministry',
        text: `The Men ministry headed by Mr Nixon Mambo
        is planning to have a men's conference that will include 
        all ministry church's men from Nairobi area.
         `
    },
    {
        title: 'Women Ministry',
        text: `On August, women have a trip to 
        kilifi where they will visit all the kilifi churches. 
        They've welcomed the Youth to join.
         `
    },
    {
        title: 'Church Planting',
        text: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit.
         In fringilla dictum nunc, id feugiat 
         `
    },
    {
        title: 'Ministry Events',
        text: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit.
         In fringilla dictum nunc, id feugiat 
         `
    },
    
])
   return (
        <div>
            <section>
                <div className="container2">
                    <h1>Upcoming Events</h1>
                    <div className="cards">
                        {cards.map((card, i) => (
                             <div key={i} className="card">
                                <h4>{card.title}</h4>
                                <p>{card.text}</p>
                                <button className='btn'>Explore</button>
                            </div>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    )
}



export default Events;