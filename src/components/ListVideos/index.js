import { useEffect, useState } from 'react';

import Api from '../Api/index.js';

export default function ListVideos() {

    const [videos, setVideos ] = useState([123,"oi",11]);

    useEffect(() => {
        Api
        .get("")
        .then((response) => setVideos(response.data))
        .catch((err) => {
            console.error("Failed to get API response" + err);
        });

    }, []);

    console.log(videos);

    return (
        <div className="container list-videos">
           
            <ul>
                <li>
                    <p>VIDEO 1</p>
                </li>
                <li>
                    <p>VIDEO 2</p>
                </li>
                <li>
                    <p>VIDEO 3</p>
                </li>
                <li>
                    <p>VIDEO 4</p>
                </li>
            </ul>
        </div>
    );
}