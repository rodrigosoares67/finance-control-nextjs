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
      
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="pb-4 bg-white dark:bg-gray-900">
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pesquisar..." />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                  </div>
                </th>
                <th scope="col" className="py-3 px-6">
                  Nome
                </th>
                <th scope="col" className="py-3 px-6">
                  Descrição
                </th>
                <th scope="col" className="py-3 px-6">
                  Saldo
                </th>
                <th scope="col" className="py-3 px-6">
                  Ativo
                </th>
                <th scope="col" className="py-3 px-6">
                  Ações
                </th>
              </tr>
          </thead>
          <tbody>
            {contas.map((conta: any) => {
              return (
                <>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4 w-4">
                      <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {conta.nome}
                    </th>
                    <td className="py-4 px-6">
                      {conta.descricao}
                    </td>
                    <td className="py-4 px-6">
                      R$ {conta.saldo}
                    </td>
                    <td className="py-4 px-6">
                      {conta.ativo ? 'Sim' : 'Não'}
                    </td>
                    <td className="py-4 px-6">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Alterar</a>
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default Contas