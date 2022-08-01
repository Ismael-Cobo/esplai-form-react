import { AutoComplete, EmailValid, FormLogin, PasswordValid } from './components'

import { CIUTATS_CAT_20K } from "./data/ciutats"

import './app.css'

function App() {

  return (
    <main className="main">
      <AutoComplete ciutats={CIUTATS_CAT_20K} />
      <FormLogin emailToValidate={'ismael@gmail.com'} passwordToValidate={'1234'} />
      <PasswordValid />
      <EmailValid />
    </main>
  )

}

export default App
