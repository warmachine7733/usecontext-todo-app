
## createContext 
- is used for wrapping children and passing props as values 

`import { createContext } from 'react'`\
`export const ParentContext = createContext(null)`\
`export const Parent = () => {`\
    `return (`\
        `<ParentContext.Provider value={data}>`\
        `<Child/>`\
        `</ParentContext.Provider>`\
    `)`\
`}`



## we can access data in two ways in child

## way 1 - using consumer tag

`import ParentContext from './ParentContext'\

export const Child = () => {\
   return (\
    <ParentContext.Consumer>\
      {\
        data => {\
            return(\
                <div>{data}</div>\
            )\
        }\
      }\
    </ParentContext.Consumer>\
   )\
}`\

## way 2 - using useConext


`import ParentContext from './ParentContext'
 import { useContext } from 'react'

 export const Child = () => {
    const data = useContext(ParentContext)
    return (
     <div>{data}</div> 
    )
 }`
