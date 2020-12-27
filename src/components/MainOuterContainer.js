import React, { useState } from 'react';

import MainContainer from './MainContainer';
import Navbar from './Navbar';

import { Frame } from 'arwes';

export default function MainOuterContainer() {

    const [selectedPage, setSelectedPage] = useState("bio")

    return (
        <> 
            <Navbar
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <div className="divider"></div>
            <MainContainer
                selectedPage={selectedPage}
            />
        </>
    )
}