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
        </Route>
      </Routes>
    </>
  );
};

export default App;
