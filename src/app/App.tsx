import React from 'react';
import '@/shared/styles/index.scss';
import {Header} from "@/widgets/Header";
import {AppRouter} from "@/app/router/ui/AppRouter";

const App = () => {
    return (
       <div className='wide-container'>
         <Header />
         <AppRouter/>
       </div>
    );
};

export default App;