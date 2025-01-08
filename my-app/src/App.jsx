import { useState } from 'react'
import Counter from './components/Counter'

function App() {
  const [totalCount, setTotalCount] = useState(0);
  return (
      <div>
        TotalCount: {totalCount}
        <Counter 
        onIncrease={(count) =>{   // 자식컴포넌트에서 인자로 전달되어 count에 저장됨
          setTotalCount(totalCount + 1);
        }}
        onDecrease={(count) =>{
          setTotalCount(totalCount - 1);
        }} />
        <Counter 
        onIncrease={(count) =>{
          setTotalCount(totalCount + 1);
        }}
        onDecrease={(count) =>{
          setTotalCount(totalCount - 1);
        }} />
        <Counter 
        onIncrease={(count) =>{
          setTotalCount(totalCount + 1);
        }}
        onDecrease={(count) =>{
          setTotalCount(totalCount - 1);
        }} />
      </div>
  )
}

export default App
