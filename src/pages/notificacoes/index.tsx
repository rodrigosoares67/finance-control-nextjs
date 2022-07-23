import type { NextPage } from 'next'
import Layout from '../../components/template/Layout'

const Notificacoes: NextPage = () => {
  return (
    <Layout titulo="Notificações" subtitulo="Confira todas as novidades">
      <h3 className={`text-3xl font-bold`}>Conteúdo</h3>
    </Layout>
  )
}

export default Notificacoes