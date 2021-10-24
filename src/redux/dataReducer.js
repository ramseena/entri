import { Type } from './types'

// Action Types

// Action Creators

// reducer

const initialState = {
  news: [],
  weather: {},
  filteredNews: []
}

function dataReducer (state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case Type.STORE_NEWS:
      return {
        ...state,
        news: action.payload,
        filteredNews: action.payload
      }
    case Type.STORE_WEATHER:
      return {
        ...state,
        weather:{...action.payload}
      }
    case Type.SEARCH_WORD:
      console.log(state.news)
      const filtered = state.news.filter(item => {
        return item.content.toLowerCase().includes(action.payload.toLowerCase())
      })

      return {
        ...state,
        filteredNews: filtered
      }

    case Type.SORT_NEWS:
      if (action.payload === 0) {
        const sortedNews = state.news.slice().sort((a, b) => {
          return new Date(b.publishedAt) - new Date(a.publishedAt)
        })
        return {
          ...state,
          filteredNews: sortedNews
        }
      } else {
        return {
          ...state,
          filteredNews: [...state.news]
        }
      }

    default:
      return state
  }
}

export default dataReducer
