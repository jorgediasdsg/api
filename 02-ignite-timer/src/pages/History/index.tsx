import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estudar React</td>
              <td>25:00</td>
              <td>Há 3 dias</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar Node</td>
              <td>25:00</td>
              <td>Há 3 dias</td>
              <td>
                <Status statusColor="yellow">Executando</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar Javascript</td>
              <td>25:00</td>
              <td>Há 5 dias</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
