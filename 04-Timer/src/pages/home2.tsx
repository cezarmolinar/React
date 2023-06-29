import { createContext, useContext, useState } from 'react'

export const CyclesContext = createContext({} as any)

function ComponenteFilhoA() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)

  return (
    <h1>
      NewCycleForm: {activeCycle}
      <button
        onClick={() => {
          setActiveCycle(2)
        }}
      >
        Alterar
      </button>
    </h1>
  )
}

function ComponenteFilhoB() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)

  return (
    <h1>
      ComponenteFilhoB - NewCycleForm: {activeCycle}
      <button
        onClick={() => {
          setActiveCycle(4)
        }}
      >
        Alterar
      </button>
    </h1>
  )
}

export function ComponentePai() {
  const [activeCycle, setActiveCycle] = useState(0)
  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <ComponenteFilhoA />
        <ComponenteFilhoB />
      </div>
    </CyclesContext.Provider>
  )
}
