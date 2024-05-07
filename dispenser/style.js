// import { item } from "./data.js"

// let index = Object.entries(item)
// console.log(index.length)
// let index = Object.entries(item).length
// console.log(index)
/**
 * ! 정수값이니까 css값에도 사용할 수 있지 않을까? 했었는데 안되네
 * ! 왜 이런 생각을 했느냐, 전달받은 css style이 data요소보다 적었기 때문
 */


export const styles = {
  // Global Styles
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    overflowX: 'hidden',
  },

  // Root Container
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(9, 1fr)',
    gap: '1vw',
    width: '98vw',
    minHeight: '95vh',
    height: 'auto',
    margin: '2vw auto',
    gridAutoRows: 'minmax(150px, auto)',

    children: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
      padding: '1vw',
    },
  },
  
  mediaQueries: {
    'max-width: 600px': {
      root: {
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridAutoRows: '120px',

        children: {
          minHeight: '120px',
        },
      },
    },

    'min-width: 601px and max-width: 900px': {
      root: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: 'minmax(150px, auto)',

        children: {
          minHeight: '150px',
        },
      },
    },
  },
};