// import { Play } from 'phosphor-react'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou focar em</label>
          <TaskInput
            id="task"
            placeholder="No que gostaria de focar agora?"
            list="task-suggestions"
          />

          <datalist id="task-suggestions">
            <option value="Estudar React" />
            <option value="Estudar NextJS" />
            <option value="Estudar NodeJS" />
            <option value="Estudar TypeScript" />
            <option value="Estudar GraphQL" />
            <option value="Estudar Prisma" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="05"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton type="submit">
          {/* <Play size={24} /> */}▶ Focar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
