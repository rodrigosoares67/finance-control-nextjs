import type { NextPage } from 'next'
import Layout from '../../components/template/Layout'

const Contas: NextPage = () => {
  return (
    <Layout titulo="Contas" subtitulo="Gerencie suas contas aqui">
      <h3 className={`text-3xl font-bold`}>Conteúdo</h3>
    </Layout>
  )
}

export default Contas