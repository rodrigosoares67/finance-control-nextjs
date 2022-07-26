import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Layout from '../../components/template/Layout'
const axios = require('axios');


const Contas: NextPage = () => {

  const [contas, setContas] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/contas').then((response) => {
      setContas(response.data)
    })
  }, [])

  return (
    <Layout titulo="Contas" subtitulo="Gerencie suas contas aqui">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-white-900 px-6 py-4 text-left">
                      Nome
                    </th>
                    <th scope="col" className="text-sm font-medium text-white-900 px-6 py-4 text-left">
                      Descrição
                    </th>
                    <th scope="col" className="text-sm font-medium text-white-900 px-6 py-4 text-left">
                      Saldo
                    </th>
                    <th scope="col" className="text-sm font-medium text-white-900 px-6 py-4 text-left">
                      Ativo
                    </th>
                  </tr>
                </thead>
                <tbody> 
                  {contas.map((conta: any) => {
                    return (
                      <>
                      <tr className="border-b">
                        <td className="text-sm text-white-900 font-light px-6 py-4 whitespace-nowrap">
                          {conta.nome}
                        </td>
                        <td className="text-sm text-white-900 font-light px-6 py-4 whitespace-nowrap">
                          {conta.descricao}
                        </td>
                        <td className="text-sm text-white-900 font-light px-6 py-4 whitespace-nowrap">
                          R$ {conta.saldo}
                        </td>
                        <td className="text-sm text-white-900 font-light px-6 py-4 whitespace-nowrap">
                          {conta.ativo ? 'Sim' : 'Não'}
                        </td>
                      </tr>
                      </>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contas