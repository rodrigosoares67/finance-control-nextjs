import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Layout from '../../components/template/Layout'
import { format } from 'date-fns'
const axios = require('axios');

const Lancamentos: NextPage = () => {

  const [lancamentos, setLancamentos] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/lancamentos').then((response) => {
      setLancamentos(response.data)
    })
  }, [])

  return (
    <Layout titulo="Lançamentos" subtitulo="Gerencie suas receitas e despesas aqui">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-white-900 px-6 py-4 text-left">
                      Data
                    </th>
                    <th scope="col" className="text-sm font-medium text-white-900 px-6 py-4 text-left">
                      Nome
                    </th>
                    <th scope="col" className="text-sm font-medium text-white-900 px-6 py-4 text-left">
                      Descrição
                    </th>
                    <th scope="col" className="text-sm font-medium text-white-900 px-6 py-4 text-left">
                      Tipo
                    </th>
                    <th scope="col" className="text-sm font-medium text-white-900 px-6 py-4 text-left">
                      Valor
                    </th>
                    <th scope="col" className="text-sm font-medium text-white-900 px-6 py-4 text-left">
                      Conta
                    </th>
                  </tr>
                </thead>
                <tbody> 
                  {lancamentos.map((lancamento: any) => {
                    return (
                      <>
                      <tr className="border-b">
                        <td className="text-sm text-white-900 font-light px-6 py-4 whitespace-nowrap">
                          {lancamento.data}
                        </td>
                        <td className="text-sm text-white-900 font-light px-6 py-4 whitespace-nowrap">
                          {lancamento.nome}
                        </td>
                        <td className="text-sm text-white-900 font-light px-6 py-4 whitespace-nowrap">
                          {lancamento.descricao}
                        </td>
                        <td className={`
                          text-sm font-light px-6 py-4 whitespace-nowrap
                          ${lancamento.tipo === 'RECEITA' ? 'text-green-500' : 'text-red-500'}
                        `}>
                          {lancamento.tipo}
                        </td>
                        <td className="text-sm text-white-900 font-light px-6 py-4 whitespace-nowrap">
                          R$ {lancamento.valor}
                        </td>
                        <td className="text-sm text-white-900 font-light px-6 py-4 whitespace-nowrap">
                          {lancamento.conta.nome} - {lancamento.conta.descricao}
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

export default Lancamentos