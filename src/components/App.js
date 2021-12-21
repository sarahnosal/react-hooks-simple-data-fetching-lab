import React, { useEffect, useState } from 'react'

function App() {
    const [isLoaded, setIsLoaded] = useState(null)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((data) => {
                setIsLoaded(data.message)
            })
    }, []);
    if (!isLoaded) return <p>'Loading...'</p>;
    return (
        <img src={isLoaded} alt='A Random Dog'
        />
    )
}

export default App;