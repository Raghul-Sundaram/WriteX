import React from 'react'
import { useState, useEffect } from 'react'
import Loading from './Loading.js'


const UserPosts = () => {
    const API_KEY = 'bf39c6ecf85d40b5817d942bae2a750a'
    const API_URl =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`

    
    
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
        <div className='w-[50%] grid grid-rows-1 gap-5 items-center justify-center'>
          <p className='text-4xl '>Your Posts</p>
          {
                isLoading ? <Loading/> : (
                    <div className='w-[90%] h-auto  grid lg:grid-cols-1 gap-10 md:grid-cols-1 sm:grid-cols-1 '>
                        {
                            newsList.map(
                                (item) => (
                                    (item.content === null || item.title === null || item.title === '[Removed]') ? console.log("Content is not available") : (
                                        <div className='bg-[#16151599] p-5 flex flex-col gap-2 shadow-inner'>
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

        </div>
  )
}

export default UserPosts