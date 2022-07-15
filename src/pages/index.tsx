import type { NextPage } from 'next'
import Layout from '../components/template/Layout'

const Home: NextPage = () => {
  return (
    <Layout titulo="Página Inicial" subtitulo="Estamos construindo uma aplicação para Controle Financeiro!">
      <h3 className={`text-3xl font-bold`}>Conteúdo</h3>
    </Layout>
  )
}

export default Home