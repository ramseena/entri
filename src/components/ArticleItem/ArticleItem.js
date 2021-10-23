import React from 'react'

const ArticleItem = ({ item }) => {
    return (
        <div className='card' style={{width:"48.2%",height:"40%",borderRadius:10,margin:4}}>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.urlToImage} alt={item.title} width={'100%'} height={400} mode='fit'></img>
                </div>
                <div className='card-back'>
                    <h1>{item.title}</h1>
                    <div>{item.content}</div>
                    <a href={item.url} target='_blank' rel='noopener noreferrer'>
                <button type='primary'>Read More</button>
              </a>
                </div>
            </div>
        </div>
    );
}

export default ArticleItem;