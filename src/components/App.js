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
        </Route>
      </Routes>
    </>
  );
};

export default App;
