import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Personagem() {
  const data = useStaticQuery(graphql`
    query PersonagemQuery {
      allEventsNode {
        nodes {
          title
          id
          characters {
            items {
              name
            }
          }
        }
      }
    }
  `)

  return (
    <header>
      <div>
        {data.allEventsNode.nodes.map(nodes => {
          return (
            <>
              <h1>{nodes.title}</h1>
              <p>ID = {nodes.id}</p>

              <div>
                {nodes.characters.items.map(items => {
                  return <li>{items.name}</li>
                })}
              </div>
            </>
          )
        })}
      </div>
    </header>
  )
}
