import { useEffect } from "react"


export default function Home(props) {

  //SPA - Uma forma de pegar dados de uma API
  //Problema: Caso o usuário quiser pegar dados do json, ele não vai conseguir, pois o browser demora para terminar o fetch.JS(do browser) leva um pouco de tempo.
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }, [])

  return (
    <div>
      <h1>Index</h1>
      {/* SSR - A interface está sendo montada no servidor no next(node). */}
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
    
  )
}

//SSR  
//Pega os dados do JSON e armazena na variável "props", e o "props" pode ser acessado na function Home no código acima.
// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes')
//   const data = await response.json()
      
//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }

//SSG - retorna página html com mais performance e estático
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
      
  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,//Vai atualizar os dados da página a cada 8 horas
  }
}
