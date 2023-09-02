import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Faculties from './Faculties';
import Counter from './counter';
import ApiData from './API';
import Calculator from './Calculator';
import GetbyId from './GetbyId';
import AddData from './AddData';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} ></Route>
          <Route path="about" element={<About />} ></Route>
          <Route path="contact" element={<Contact />} ></Route>
          <Route path="faculties" element={<Faculties />} ></Route>
          <Route path="count" element={<Counter />} ></Route>
          <Route path="api" element={<ApiData />} ></Route>
          <Route path="calc" element={<Calculator />} ></Route>
          <Route path="faculty/:id" element={<GetbyId />} ></Route>
          <Route path="addfaculty" element={<AddData />} ></Route>
          <Route path="/edit/:id" element={<AddData />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
