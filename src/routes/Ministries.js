import React from 'react';
import './Ministries.css';
import CardItem from './CardItem';
//import { Button } from "./Button";

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Ministries</h1>

      <div className='cards__container2'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={'./images/italy2.jpeg'}
              text='We strive to raise God fearing 
              generation of children and preteens.
               We have Sunday School classes and special
                programs for children that run occasionally 
                during the year.'
              label='Children Ministry '
              path='/'
            />
            <CardItem
              src={'./images/Itlay4.jpg'}
              text='A Community of youthful Believers
               Impacting the World with the Gospel of 
               our Lord Jesus Christ through the transforming
                power of the Holy Spirit.'
              label='Youth Ministry'
              path='/'
            />

            <CardItem
              src={'./images/italy7.jpg'}
              text='Transforming Men for God’s purposes.
              It is said of King David in the book of Acts
               that he “served the purpose of God in his own 
               generation” (Acts 13:36). David was chosen as 
               a young man.'
              label='Men Ministry'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={'./images/japan1.jpg'}
              text='
              A vibrant Christian woman equipped to impact the world.
              It is also true that God calls women to ministry.
               But these subjective callings and giftings should 
               be interpreted by and aligned with Scripture. '
              label='Women Ministry'
              path='/'
            />
            <CardItem
              src={'./images/japan2.jpg'}
              text='To raise the family profile
               by strengthening the family structure 
               through training in biblical principles,
                mentoring, counseling and fellowship, to 
                create effective godly families grounded 
                in the word of God.'
              label='Family in Ministry'
              path='/'
            />
            <CardItem
              src={'./images/japan3.jpg'}
              text='“All authority in heaven and 
              on earth has been given to me, Therefore,
               go and make disciples of all nations,
                baptising them in the name of the Father,
                 and of the Son and of the Holy Spirit, and 
                 teaching them to obey everything I have commanded you.
                  And surely I am with you always to the very end of the
                   age.”'
              label='Missions & Outreach'
              path='/'
            />            
          </ul>
        </div>
      </div>


      <div className='cards__container2'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={'./images/italy2.jpeg'}
              text='The purpose of the School 
              of Ministry is to educate, equip 
              and empower disciples of Jesus to 
              go out and reach the world for Jesus 
              wherever God may call them. Our goal
               is to provide a relational, intentional, 
               and biblical process to help grow you as a person,
                a leader, and a disciple of Christ.'
              label='Schools Ministry'
              path='/'
            />
            <CardItem
              src={'./images/Itlay4.jpg'}
              text='
              Prayer gives us a means of showing 
              compassion toward other believers 
              and the world around us as we take 
              them and their needs to a God who cares
               and can help them far more than we could
                ever hope to do ourselves.'
              label='Prayer Ministry'
              path='/'
            />

            <CardItem
              src={'./images/italy7.jpg'}
              text='The missionary task is making disciples
               and planting churches among all the unreached 
               peoples and places of the world. The church is
                at the center of the Great Commission. Church 
                planting is simply what missionaries do as they 
                faithfully proclaim the gospel and make disciples.'
              label='Church Planting Ministry'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={'./images/japan1.jpg'}
              text='
              The goal of a music ministry is to accompany,
               facilitate, and enhance the singing of the
                people of God. In this sense, everyone in
                 the church is part of the choir.  Music is made 
                 first of all to the Lord and only secondarily to 
                 each other. Music should communicate and express a 
                 sense of awe and wonder in the presence of God; it
                  should lead our thoughts toward God rather than 
                  toward ourselves.'
              label='Worship & Music Ministry'
              path='/'
            />
            <CardItem
              src={'./images/japan2.jpg'}
              text='This is a dynamic ministry that caters 
              for the young people between the ages of 13-18 years. 
               Our vision is to see the teens of our church transformed 
               by Christ to impact the teens for Christ.'
              label='Teens Ministry'
              path='/'
            />
            <CardItem
              src={'./images/japan3.jpg'}
              text='Biblical Counseling is the process where the Bible, Gods 
              Word is related individually to a person or persons who
               are struggling under the weight of personal sin and/or 
               the difficulties with suffering, so that he or she might 
               genuinely change in the inner person to be pleasing to God.'
              label='Counselling Ministry'
              path='/'
            />            
          </ul>
        </div>
      </div>
      
      </div>      
  );
}

export default Cards;