import type { NextPage } from 'next'
import Layout from '../../components/template/Layout'

const Lancamentos: NextPage = () => {
  return (
    <Layout titulo="Lançamentos" subtitulo="Gerencie suas receitas e despesas aqui">
      <h3 className={`text-3xl font-bold`}>Conteúdo</h3>
    </Layout>
  )
}

export default Lancamentos