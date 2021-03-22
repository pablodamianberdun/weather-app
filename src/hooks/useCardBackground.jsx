import React, {useState, useEffect} from 'react'
import axios from "axios"

const useCardBackground = (initialState, city) => {
	const [state, setState] = useState(initialState)

	 useEffect(() => {
        const getCardImage = async () => {
            const url = `https://pixabay.com/api/?key=19949153-2db7b3c8211ebbbd16f59e64d&q=${city}&orientation=vertical&category=travel&image_type=photo&pretty=true`;
            const response = await axios.get(url);
            const links = response.data.hits;
            const num = Math.floor(Math.random() * links.length);
            const link = links[num];

			if (links.length === 0) {
				const defaultUrl = 'https://pixabay.com/api/?key=19949153-2db7b3c8211ebbbd16f59e64d&q=city&category=travel&orientation=vertical&image_type=photo&pretty=true'
				const defaultResponse = await axios.get(defaultUrl)
				const defaultLinks = defaultResponse.data.hits
				const dfNum = Math.floor(Math.random() * defaultLinks.length)
				const dfLink = defaultLinks[dfNum];
				console.log(dfLink);
				setState(dfLink.largeImageURL)
			}
			else{
				setState(link.largeImageURL);
			}
        };

        getCardImage();
    }, [city]);

	const BackgroundImg = () => ( 
		<img src={state} alt=""/>
	 );

	return [state, BackgroundImg, setState]
}
 
export default useCardBackground;