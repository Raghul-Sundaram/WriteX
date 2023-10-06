import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from './Loading'

const Home = () => {
    const API_KEY = 'bf39c6ecf85d40b5817d942bae2a750a'
    const API_URl = `https://newsapi.org/v2/everything?q=apple&from=2023-10-03&to=2023-10-03&sortBy=popularity&apiKey=${API_KEY}`



    const [newsList, setNewsList] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(
        () => {
            async function fetchData() {
                setLoading(true)
                const response = await fetch(API_URl)
                const data = await response.json()
                setNewsList(data.articles)
                setLoading(false)
            }
            fetchData();
        },
        []
    )

    return (
        <div className='flex items-center justify-center lg:mt-[10%] w-[90%] sm:mt-[20%]' >
            <h1 className='text-xl absolute top-10'>For You</h1>



            {
                isLoading ? <Loading /> : (
                    <div className='w-[90%] h-auto  grid lg:grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1 '>
                        {
                            newsList.map(
                                (item) => (
                                    (item.content === null || item.title === null || item.title === '[Removed]') ? console.log("Content is not available") : (
                                        <div key={item.key} className='bg-[#16151599] p-5 flex flex-col gap-2 shadow-inner'>
                                            <h1 className='text-xl h-[100px]'>{item.title}</h1>
                                            <p className='text-sm opacity-50'> Published by <span className='font-bold opacity-100'>{item.author}</span> at {item.publishedAt} </p>
                                            <img className='w-100 h-[250px]' src={item.urlToImage} alt='' />
                                            <p>{item.content}</p><a href={item.url} target='_blank' rel='norefferer' ><span className='text-red'  >Read more..</span></a>
                                        </div>
                                    )
                                )
                            )
                        }
                    </div>
                )
            }



            <Outlet />

        </div>
    )
}

export default Home