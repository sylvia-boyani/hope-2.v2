import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import WebDesign from '../routes/WebDesign';
import Kilifi from '../routes/Kilifi';
import Church from '../routes/Church';
import Layout from './Layout';
import AboutWho from '../routes/AboutWho';
import History from '../routes/History';
import Leaders from '../routes/Leaders';
import Statement from '../routes/Statement';
import Contact from '../routes/Contact';
import Events from '../routes/Events';
import Ministries from '../routes/Ministries';
import Tumati from '../routes/Tumati';
import Raila from '../routes/churches/Nairobi/Raila/Raila';
import Fuata from '../routes/churches/Nairobi/Fuata-nyayo/Fuata';
import Gitwamba from '../routes/churches/Nairobi/Gitwamba/Gitwamba';
import Highridge from '../routes/churches/Nairobi/Highridge/Highridge';
import Maili from '../routes/churches/Nairobi/Maili/Maili';
import Grogon from '../routes/churches/Nairobi/Grogon/Grogon';
import Kayaba from '../routes/churches/Nairobi/Kayaba/Kayaba';
import Kiambio from '../routes/churches/Nairobi/Kiambio/Kiambio';
import Kibera from '../routes/churches/Nairobi/Kibera/Kibera';
import Kambi from '../routes/churches/Kilifi/Kambi ya Waya/Kambi'
import Kibaoni from '../routes/churches/Kilifi/Kibaoni/Kibaoni'
import Marrum from '../routes/churches/Kilifi/Marrum/Marrum'
import Povuni from '../routes/churches/Kilifi/Povuni/Povuni'
import Sogorosa from '../routes/churches/Kilifi/Sogorosa/Sogorosa'
import Kikwatani from '../routes/churches/Mombasa/Kikwatani/Kikwatani'
import Bubamba from '../routes/churches/Western/Bubamba/Bubamba'
import Mahemas from '../routes/churches/Western/Mahemas/Mahemas'
import Kitale from '../routes/churches/Western/Kitale/Kitale'
import Chwele from '../routes/churches/Western/Chwele/Chwele'
import Nambemo from '../routes/churches/Western/Nambemo/Nambemo'
import Hongwe from '../routes/churches/Lamu/Hongwe/Hongwe'
import Karafuu from '../routes/churches/Lamu/Karafuu/Karafuu'
import Kibokoni from '../routes/churches/Lamu/Kibokoni/Kibokoni'
import Poromoko from '../routes/churches/Lamu/Poromoko/Poromoko'
import Moa from '../routes/churches/Lamu/Moa/Moa'
import Manda from '../routes/churches/Lamu/Manda/Manda'
import Sabasaba from '../routes/churches/Lamu/Sabasaba/Sabasaba'
import Roka from '../routes/churches/Lamu/Roka/Roka'
import Quality from '../routes/Resources/Quality'
import Strategic from '../routes/Resources/Strategic'
import Constitution from '../routes/Resources/Constitution'
import Bylaws from '../routes/Resources/Bylaws'
import Financial from '../routes/Resources/Financial'
import Children from '../routes/Children'
import Gala from  '../routes/Min-Gallery/Gala'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="church" element={<Church />} />
          <Route path="web-design" element={<WebDesign />} />
          <Route path="kilifi" element={<Kilifi />} />
          <Route path="who-we-are" element={<AboutWho />} />
          <Route path="*" element={<p>Not found!</p>} />
          <Route path='history' element={<History />}/>
          <Route path='leaders' element={<Leaders />}/>
          <Route path='statement' element={<Statement />}/>
          <Route path='tumati' element= {<Tumati />}/>
          <Route path='ministries' element={<Ministries />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='gala' element={<Gala />}/>
          <Route path='events' element={<Events />}/>
          <Route path='raila' element={<Raila />}/>
          <Route path='fuata' element={<Fuata />}/>
          <Route path='gitwamba' element={<Gitwamba />}/>
          <Route path='highridge' element={<Highridge />}/>
          <Route path='maili' element={<Maili />}/>
          <Route path='grogon' element={<Grogon />}/>
          <Route path='kayaba' element={<Kayaba />}/>
          <Route path='kiambio' element={<Kiambio />}/>
          <Route path='kibera' element={<Kibera />}/>
          <Route path='kambi' element={<Kambi />}/>
          <Route path='kibaoni' element={<Kibaoni />}/>
          <Route path='marrum' element={<Marrum />}/>
          <Route path='povuni' element={<Povuni />}/>
          <Route path='sogorosa' element={<Sogorosa />}/>
          <Route path='kikwatani' element={<Kikwatani />}/>
          <Route path='bubamba' element={<Bubamba />}/>
          <Route path='mahemas' element={<Mahemas />}/>
          <Route path='kitale' element={<Kitale />}/>
          <Route path='chwele' element={<Chwele />}/>
          <Route path='nambemo' element={<Nambemo />}/>
          <Route path='hongwe' element={<Hongwe />}/>
          <Route path='karafuu' element={<Karafuu />}/>
          <Route path='kibokoni' element={<Kibokoni />}/>
          <Route path='poromoko' element={<Poromoko />}/>
          <Route path='moa' element={<Moa />}/>
          <Route path='manda' element={<Manda />}/>
          <Route path='saba' element={<Sabasaba />}/>
          <Route path='roka' element={<Roka />}/>
          <Route path='quality' element={<Quality />}/>
          <Route path='strategic' element={<Strategic />}/>
          <Route path='constitution' element={<Constitution />}/>
          <Route path='laws' element={<Bylaws />}/>
          <Route path='financial' element={<Financial />}/>
          <Route path='children' element={<Children />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
