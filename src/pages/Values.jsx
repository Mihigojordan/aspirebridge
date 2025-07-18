import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import OurValues from '../components/OurValues'
import WhatWedo from '../components/WhatWedo'
import WeShall from '../components/WeShall'
import { useEffect } from "react";

import image from '../assets/image.avif'
import GetInvolved from "../components/GetInvolved";


function Values() {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <>
      <Header
        title="Our Values"
        linkTitle=" Our Values"
        linkHref="/values"
        backgroundImage={image}
      />
        <OurValues />

<WhatWedo />
<WeShall />
<GetInvolved />

    </>
  )
}

export default Values