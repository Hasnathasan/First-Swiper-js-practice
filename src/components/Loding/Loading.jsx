import React from 'react';
import { useNavigation } from 'react-router-dom';

const Loading = () => {
    const navigation = useNavigation();
    return (
        <div>
            <div>{navigation.state === 'loading'? "loading...": ""}</div>
        </div>
    );
};

export default Loading;